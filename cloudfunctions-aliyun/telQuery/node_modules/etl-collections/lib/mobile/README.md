### mobile utils lib

#### query

+ @param number 号码 `15101332143`
+ @desc 查询国内号码
+ @return {}
    - province 手机号码归属地 省份
    - city     手机号码归属地 城市
    - type     手机号码 运营商
+ @example
```js
etl.mobile.query('15101332143')
=>
{ 'province': '甘肃', city: '兰州', type: '中国移动' }
```


#### getCountry

+ @param number 号码 `+8615101332143`
+ @desc 查询国际号码
+ @return {}
    - code      国家编码
    - number    号码
    - country   国家中文
    - enCountry 国家英文
+ @example
```js
etl.mobile.getCountry('+8615101332143')
=>
{ code: 'CN',
  number: '15101332143',
  country: '中国',
  enCountry: 'China' }
```

#### getInfo

+ @param code 国家代码 `CN`
+ @desc 根据国家代码查询信息
+ @return {}
    - code 国家代码
    - name 国家名称中文
    - enName  国家名称英文
    - number  国家号码编号
+ @example
```js
etl.mobile.getInfo('CN')
=>
{ code: 'CN', name: '中国', enName: 'China', number: '86' }
```
