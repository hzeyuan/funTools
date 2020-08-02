from flask import Flask
from flask import request, jsonify, abort
import subprocess

app = Flask(__name__)

WEBHOOK_VERIFY_TOKEN = "miyao"


@app.route('/webhook', methods=['GET', 'POST'])  # * 监听的路径，可按照项目定义多个
def webhook():
    if request.method == 'GET':
        verify_token = request.headers.get('X-Gitlab-Token')
        if verify_token == WEBHOOK_VERIFY_TOKEN:  # * 验证密钥，如果不对直接报错退出
            return jsonify({'status': 'success'}), 200
        else:
            return jsonify({'status': 'bad token'}), 401

    elif request.method == 'POST':
        verify_token = request.headers.get('X-Gitlab-Token')
        if verify_token == WEBHOOK_VERIFY_TOKEN:
            # 定义需要执行的命令,我这边使用salt来批量管理
            retcode = subprocess.call("echo '触发成功!'", shell=True)
            if retcode == 0:
                return jsonify({'status': 'success'}), 200
            else:
                return jsonify({'status': 'git pull error'}), 503
        else:
            return jsonify({'status': 'bad token'}), 401

    else:
        abort(400)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5050')  # //* 监听地址和对外开放的端口
