#!/usr/bin/python3
# encoding: utf-8

'''
@project: ImageCrawler
@author: sunkuanwei
@email: arckalsun@gmail.com
@file: utils
@time: 2019/3/5 15:02 
'''

import hashlib
import time

PRIVATEKEY = "1234567890"

def genSign(dic,timestamp,nonce,key):
    '''
    校验签名
    :param dic:
    :param timestamp:
    :param nonce:
    :param key:
    :return:
    '''
    sorted_dict = sorted(dic.items(), key=lambda d: d[0])
    # 拼接字符串
    str_tmp = ''
    for k, v in sorted_dict:
        str_tmp = str_tmp + k + v
    str_tmp += "timestamp" + timestamp
    str_tmp += "nonce" + nonce
    str_tmp += "key" + key
    m = hashlib.md5()
    m.update(str_tmp.encode())
    check_sign = m.hexdigest()
    return check_sign


def checkRequest(request,exp=600):
    '''
    校验请求
    :param request: {flask.request}
    :param exp: {int} 超期时间
    :return: {dict}
    '''
    # 验签
    ret = {
        "code": 0,
        "msg": "success"
    }
    timestamp = request.headers['request-timestamp']
    nonce = request.headers['request-nonce']
    sign = request.headers['request-sign']
    if request.method=='GET':
        args = request.args
    else:
        args = request.form.to_dict()
    sign_1 = genSign(args, timestamp, nonce, key=PRIVATEKEY)
    if sign_1!=sign:
        ret['code'] = 1001
        ret['msg']  = 'Check sign failed.'
    elif abs(int(timestamp)/1000-time.time())>exp:
        ret['code'] = 1002
        ret['msg'] = 'Request has expired.'
    return ret

# For a given file, return whether it's an allowed type or not
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in set(['png', 'jpg', 'jpeg', 'gif'])
