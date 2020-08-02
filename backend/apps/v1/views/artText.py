import random

from flask import request
from flask_restful import Resource
from flask import render_template_string
from art.art_param import FONT_MAP, DECORATIONS_MAP
from art import text2art
from utils import charPic
import cv2
import numpy as np
import time

class TestApi(Resource):
    def get(self):
        time.sleep(1)
        # print(request.headers)
        return  render_template_string('<h2 class="title">Hello world</h2>')


class YingWenYiShuZiApi(Resource):
    def get(self):
        rsp = {'code': 0, 'data': ''}

        text = request.args.get('text')
        name = request.args.get('styleName')
        Art = text2art(text, font=name, chr_ignore=False)
        rsp['data'] = Art
        return rsp


class Img2TextAPI(Resource):
    def post(self):
        rsp = {'code': 0, 'data': ''}
        file = request.files['file'].read()
        cp = charPic.charPic(file=file)
        output = cp.gen()
        rsp['data'] = output
        return rsp


class JokeAPI(Resource):
    def get(self):
        from apps.v1.model import Joke
        start = request.args.get('start', 0)
        rsp = {'code': 0, 'data': ''}
        try:
            jokeObj = Joke.objects.skip(int(start)).limit(20)
            joke = [j.to_mongo().to_dict() for j in jokeObj]
            list(map(lambda j: j.pop('_id'), joke))
            rsp['data'] = joke
        except Exception as e:
            rsp['code'] = -1
            rsp['msg'] = str(e)
        return rsp


class ShenHuiFuAPI(Resource):
    def get(self):
        from apps.v1.model import Shenhuifu
        start = request.args.get('start', 0)
        rsp = {'code': 0, 'data': ''}
        try:
            shenHuiFuObj = Shenhuifu.objects.skip(int(start)).limit(20)
            shenHuiFu = [j.to_mongo().to_dict() for j in shenHuiFuObj]
            list(map(lambda j: j.pop('_id'), shenHuiFu))
            rsp['data'] = shenHuiFu
        except Exception as e:
            rsp['code'] = -1
            rsp['msg'] = str(e)
        return rsp


class JuZiAPI(Resource):
    def get(self):
        from apps.v1.model import Juzi
        start = request.args.get('start', 0)
        rsp = {'code': 0, 'data': ''}
        try:
            juziObj = Juzi.objects.skip(int(start)).limit(20)
            juzi = [j.to_mongo().to_dict() for j in juziObj]
            list(map(lambda j: j.pop('_id'), juzi))
            rsp['data'] = juzi
        except Exception as e:
            rsp['code'] = -1
            rsp['msg'] = str(e)
        return rsp
