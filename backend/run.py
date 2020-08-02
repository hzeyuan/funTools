#!/usr/bin/python3
# encoding: utf-8

'''
@project: crawler_server
@author: sunkuanwei
@email: arckalsun@gmail.com
@file: app
@time: 2019/3/5 19:53 
'''
from apps import register_blueprints
from flask import Flask
from flask_mongoengine import MongoEngine
from config import Conf
import redis

db = MongoEngine()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Conf)
    app.secret_key = app.config['SECRET_KEY']
    db.init_app(app)
    # app.redis = redis.StrictRedis(host=app.config['REDIS_HOST'],
    #                               port=app.config['REDIS_PORT'],
    #                               db=app.config['REDIS_DB'],
    #                               password=app.config['REDIS_PASSWORD'], )
    app.debug = app.config['DEBUG']
    register_blueprints(app)
    return app

application = create_app()
if __name__ == '__main__':
    application.run(threaded=True)
