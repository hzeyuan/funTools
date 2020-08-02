from flask import request
from flask_restful import Resource
from utils.manyTranslaters.baidu import Dict, BaiduApi
import json


class TranslateAPI(Resource):
    """翻译api
        1.调用百度api 或者调用破解版的百度api
    """

    def post(self):
        rsp = {'code': 0, 'data': ''}
        data = json.loads(request.data.decode('utf-8'))
        content = data.get('content', '')
        src = data.get('src', 'auto')
        dst = data.get('dst', 'en')
        if not content: return rsp
        try:
            rst = BaiduApi(content, src, dst)
            rsp['data'] = rst['trans_result'][0]['dst']
            # baidu翻译破解的方法
            # d = Dict()
            # json = d.dictionary(content, dst=dst, src=src)
            # rsp['data'] = json['trans_result']['data'][0]['dst']
        except:
            rsp['code'] = -1
        return rsp


class FreestyleAPI(Resource):

    def get(self):
        """找到相同韵脚的字"""
        from ..model import Character1, Phrase1
        rsp = {'code': 0, 'data': ''}
        character = request.args.get('character', '')
        if not character: return rsp
        characterList = []
        rhymeList = []
        character = character[::-1]
        for char in character:
            c = Character1.objects(character=char).only('rhyme')[0]
            # rhyme =c.rhyme
            characterList.append(c)
            rhymeList.append(c.rhyme)
        if len(character) == 1:
            # res = Character1.objects(rhyme=rhyme).only('character').distinct('character')
            # rsp['data'] = res
            # print(rsp)
            rhyme_phrases = Phrase1.objects(c1=characterList[0].id).only('phrase')
        elif len(character) == 2:
            rhyme_phrases = Phrase1.objects(c1=characterList[0].id, c2=characterList[1].id).only('phrase')
        elif len(character) == 3:
            rhyme_phrases = Phrase1.objects(c1=characterList[0].id, c2=characterList[1].id,
                                            c3=characterList[2].id).only('phrase')
        elif len(character) >= 4:
            rhyme_phrases = Phrase1.objects(c1=characterList[0].id, c2=characterList[1].id,
                                            c3=characterList[2].id, c4=characterList[3].id).only('phrase')
        # rhyme_phrases = Phrase1.objects(c1__in=[rhyme]).only('phrase')
        # rhyme_phrases = Phrase1.objects(c1__in=[rhyme]).only('phrase')
        # rhyme_phrases = Phrase1.objects(c1__in=[rhyme]).only('phrase')
        rsp['ci'] = [ci.phrase for ci in rhyme_phrases]
        print(rhyme_phrases)
        return rsp
