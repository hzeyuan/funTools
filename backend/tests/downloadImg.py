import json
import requests
import time
from multiprocessing.pool import ThreadPool
from lxml import etree

joke = []


def download_img(img_url):
    r = requests.get(img_url)
    html = etree.HTML(r.content)
    title = html.xpath("//div[@class='module articlelist']/ul/li/div[@class='hd']/text()")
    content = html.xpath("//div[@class='content']/div[@class='module articlelist']/ul/li/pre/text()")
    # print(r.status_code) # 返回状态码
    for t, c in zip(title, content):
        joke.append({
            'title': t,
            "content": c
        })
    print(title)


if __name__ == '__main__':

    p = ThreadPool(200)
    for i in range(1,6848):
        url = "http://www.17989.com/xiaohua/{}.htm".format(i)
        p.apply_async(func=download_img, args=(url,))


    p.close()
    p.join()
    with open('joke.json','w')as f:
        f.write(json.dumps(joke))
    print('done')
