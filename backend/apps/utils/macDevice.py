import re
from pprint import pprint
import json

hot = ['Cisco', 'Motus', 'Samsung', 'ZTE', 'D-LINK', 'OPPO', 'Phicomm', 'MERCURY', 'DEll', 'NOKIA', 'SONY', 'TP-LINK',
       'HTC', 'MEIZU', 'XIAOMI', 'OnePlus', 'Qihoo', 'Apple','HUAWEI','H3C','Smartisan','Lemobile','Intel Corporate']


# def mac2Device():
#     """mac地址查询厂商"""
#     result = {}
#     with open('oui.txt', 'r')as f:
#         data = f.read()
#         split1 = re.split('\n\S+-\S+-\S+', data)
#         for i, s in enumerate(split1):
#             if not s:continue
#             first, base16 = s.split('(base 16)')
#             name, code = first.split('\n')
#             for h in hot:
#                 if h in name:
#                     code = code.strip()
#                     result[code] = h
#                     fullName = name.replace('\t', '').replace('(hex)', '').replace(
#                         code[:2] + '-' + code[2:4] + '-' + code[4:], '').strip()
#                     address = base16.replace('\n', '').replace('\t', '')
#
#     return result
#     # with open('mac2service.json', 'w')as f:
#     #     f.write(json.dumps(result))
#     #     # print(json.dumps(result))
#
#
# def device2mac():
#     result = mac2Device()
#     pinpai = {}
#     for h in hot:
#         pinpai[h] = []
#         for r in result:
#             # name = result[r]['name']
#             # hex = result[r]['hex']
#             # desc = result[r]['desc']
#             if h in  result[r]:
#                 pinpai[h].append(r)
#     pprint(pinpai)
#     with open('service2mac1.json', 'w')as f:
#         f.write(json.dumps(pinpai))
#
#
# device2mac()
result = {}
with open('service2mac1.json', 'r')as f:
    j = json.load(f)
    for x,y in j.items():
        for y1 in y:
            result[y1] = x
with open('service2mac2.json','w')as f:
    f.write(json.dumps(result))
print(result)