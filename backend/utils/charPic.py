from matplotlib import pyplot as plt
import numpy as np
import cv2
from pathlib import Path
from PIL import Image, ImageFont, ImageDraw


class charPic():
    def __init__(self, file, charlist="@W#$OEXC[(/?=^~_.' ", height=100, equalize=True):
        self.file = file
        self.charlist = charlist  #
        self.height = height  # 生成图片高度
        self.equalize = equalize  # 直方图均衡化
        self.output = ''

    def imshow(self, im):
        plt.imshow(255 - im, cmap='Greys')
        plt.show()

    def im2char(self, im, charlist, dsize):
        im = cv2.resize(im, dsize=dsize, interpolation=cv2.INTER_AREA)
        length = len(charlist) - 1
        im = np.int32(np.round(im / 255 * length))
        output = []
        for y in range(dsize[1]):
            s = ""
            for x in range(dsize[0]):
                s += charlist[im[y][x]]
            # print(s)
            output.append(s)
        # print(output)
        return '\r\n'.join(output)

    def save(self, txtName):
        try:
            with open('1231321.txt','w+') as f:
                f.write(self.output)
                #print(f'Output: {path.name}')
        except Exception as e:
            raise e
        # print(f'Output size: {output_width}x{output_height}')

    def gen(self):
        if isinstance(self.file, bytes):
            im = cv2.imdecode(np.fromstring(self.file, np.uint8), cv2.IMREAD_UNCHANGED)
        elif isinstance(self.file, str):
            path = Path(self.file)
            im = cv2.imread(str(path))
        im = cv2.cvtColor(im, cv2.COLOR_RGB2GRAY)  # 转灰度图
        if self.equalize: im = cv2.equalizeHist(im)  # 直方图均衡化
        height, width, *_ = im.shape
        output_height = self.height
        output_width = round(width * 1.865 * output_height / height)
        output_height = round(height / 1.865 * output_width / width)
        output = self.im2char(im, self.charlist, (output_width, output_height))
        self.output = output
        return output


if __name__ == '__main__':
    cp = charPic('x1.jpg')
    cp.gen()
    # cp.save('123123')
