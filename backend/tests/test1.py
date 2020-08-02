import json

f = open('joke.json')
j = json.load(f)
d = []
with open('joke1.json', 'w')as ff:
    for i in j:
        d.append({
            'title': i['title'],
            'joke': i['content'],
            'zan': 0
        })
    ff.write(json.dumps(d))
f.close()
