import requests


def tranlateTestApi():
    r = requests.post('https://wngj.hzeyuan.cn/api/v1/translate', data={'src': 'zh', 'dst': 'en', 'content': '23432'})
    print(r.text)


if __name__ == '__main__':
    tranlateTestApi()
