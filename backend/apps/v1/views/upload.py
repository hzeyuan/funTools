from flask import request
from flask_restful import Resource
from utils import aliyunoss
import uuid
import os


class UploadAPI(Resource):
    def post(self):
        rsp = {'code': 0, 'data': ''}
        file = request.files['file'].read()
        u = uuid.uuid4().hex
        suffix = os.path.splitext(request.files['file'].filename)[1]
        filename = u + suffix
        result = aliyunoss.upload_file(filename, file)
        rsp['data'] = {
            'img': 'https://wngj.oss-accelerate.aliyuncs.com/{}'.format(filename),
            'img_html': '<img src="https://wngj.oss-accelerate.aliyuncs.com/{}" alt="{}" border="0"/>'.format(filename,
                                                                                                              filename),
            'img_markdown': '![{}](https://s1.ax1x.com/2020/06/27/{})'.format(filename, filename),
            'th_img': 'https://wngj.oss-accelerate.aliyuncs.com/{}?x-oss-process=style/suolvetu'.format(filename),
            'th_img_html': '<img src="https://wngj.oss-accelerate.aliyuncs.com/{}?x-oss-process=style/suolvetu" '
                           'alt="{}" border="0"/>'.format(
                filename, filename),
            'th_img_markdown': '![{}](https://wngj.oss-accelerate.aliyuncs.com/{}?x-oss-process=style/suolvetu)'.format(
                filename, filename),
        }
        return rsp
