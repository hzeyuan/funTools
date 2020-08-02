#!/usr/bin/python3
# encoding: utf-8

'''
@project: crawler_server
@author: sunkuanwei
@email: arckalsun@gmail.com
@file: __init__.py
@time: 2019/3/5 17:51 
'''
from flask import Blueprint
from flask_restful import Api
from .views.artText import TestApi, YingWenYiShuZiApi, Img2TextAPI, JokeAPI,ShenHuiFuAPI,JuZiAPI
from .views.nlp import TranslateAPI, FreestyleAPI
from .views.upload import UploadAPI


def register_views(app):
    api = Api(app)
    api.add_resource(TestApi, '/hi')
    api.add_resource(YingWenYiShuZiApi, '/artText')
    api.add_resource(Img2TextAPI, '/img2Text')
    api.add_resource(TranslateAPI, '/translate')
    api.add_resource(FreestyleAPI, '/freestyle')
    api.add_resource(UploadAPI, '/upload')
    api.add_resource(JokeAPI, '/joke')
    api.add_resource(ShenHuiFuAPI, '/shenHuiFu')
    api.add_resource(JuZiAPI, '/juzi')


def create_blueprint_v1():
    '''
    注册蓝图->v1版本
    '''
    bp_v1 = Blueprint('v1', __name__)
    register_views(bp_v1)
    return bp_v1
