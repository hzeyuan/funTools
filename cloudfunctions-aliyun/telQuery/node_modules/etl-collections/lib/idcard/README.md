### idcard util lib

#### query

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
    - birthday  出生日期
    - gender    性别
+ @example
```js
etl.idcard.query('371501199112025093')
=>
{ areaId: '371501',
  areaName: '山东省聊城市市辖区',
  birthday: '19911202',
  gender: '男' }
```



#### getArea

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
+ @example
```js
etl.idcard.getArea('371501199112025093')
=>
{ areaId: '371501',
  areaName: '山东省聊城市市辖区'}
```

#### getBirthday
+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - birthday  出生日期
+ @example
```js
etl.idcard.getBirthday('371501199112025093')
=>
{ birthday: '19911202' }
```

#### getGender

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - gender    性别
+ @example
```js
etl.idcard.getGender('371501199112025093')
=>
{ gender: '男' }
```

#### isIdcard

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return Boolean
+ @example
```js
etl.idcard.isIdcard('371501199112025093')
=>
true
```
