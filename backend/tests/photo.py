import json
import requests
import time
from multiprocessing.pool import ThreadPool

from utils import aliyunoss


def download_img(img_url, path):
    r = requests.get(img_url, stream=True)
    # print(r.status_code) # 返回状态码
    t = time.time()
    if r.status_code == 200:
        aliyunoss.upload_file(path, r.content)
        print(path)
        # with open(path, 'wb')as f:
        #     f.write(r.content)
            # f.close()
            # 将内容写入图片
    # print(time.time()-t)
    return


if __name__ == '__main__':

    with open('dongtaitu.json', 'r')as f:
        j = json.load(f)

    p = ThreadPool(200)
    for i in j:
        #print(i, i['src'])

        p.apply_async(func=download_img, args=(i['src'], 'gif/{}.gif'.format(i['title'])))
        # break
        # download_img(i['src'],'./gif/{}.gif'.format(i['title']))
        #break
    p.close()
    p.join()
    print('done')
