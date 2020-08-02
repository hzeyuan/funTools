import requests

for i in range(100):
    r = requests.get('http://127.0.0.1:5000/api/v1/hi')
    print(r.text)
