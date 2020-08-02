#!/usr/bin/python3
# encoding: utf-8

'''
@project: crawler_server
@author: sunkuanwei
@email: arckalsun@gmail.com
@file: decorator
@time: 2019/3/5 19:42 
'''

from functools import wraps
from flask import Flask,request,jsonify
from .utils import genSign
import time

PRIVATEKEY = "abcabcabc"
API_TIMEOUT = 600

def sign_check(app):
    def wrapped(func):
        @wraps(func)
        def decorator(*args,**kwargs):
            # 验签
            try:
                timestamp = request.headers['request-timestamp']
                nonce = request.headers['request-nonce']
                sign = request.headers['request-sign']
                if request.method == 'GET':
                    maps = request.args
                else:
                    maps = request.form.to_dict()
                sign_1 = genSign(maps, timestamp, nonce, key=PRIVATEKEY)
                if sign!=sign_1:
                    ret = {
                        "code": 1001,
                        "msg": "Check sign failed."
                    }
                    return jsonify(ret)
                elif abs(int(timestamp) / 1000 - time.time()) > API_TIMEOUT:
                    ret = {
                        "code": 1001,
                        "msg": "Request has expired."
                    }
                    return jsonify(ret)
                return func(*args, **kwargs)
            except Exception as e:
                if app:
                    app.logger.exception(e)
                return jsonify({"code": 1004,"msg": 'Exception: ' + str(e)})
        return decorator
    return wrapped
