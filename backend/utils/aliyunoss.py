import oss2


def upload_file(fileName, content):
    # 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
    auth = oss2.Auth('', '')
    # Endpoint以杭州为例，其它Region请按实际情况填写。
    bucket = oss2.Bucket(auth, 'http://oss-accelerate.aliyuncs.com', 'wngj')
    # 上传文件
    # 如果需要上传文件时设置文件存储类型与访问权限，请在put_object中设置相关headers, 参考如下。
    headers = dict()
    headers['Content-Length'] = 1024 * 1024 * 10
    # headers["x-oss-storage-class"] = "Standard"
    # headers["x-oss-object-acl"] = oss2.OBJECT_ACL_PRIVATE
    # result = bucket.put_object('<yourObjectName>', 'content of object', headers=headers)
    result = bucket.put_object(fileName, content)
    return result


#result = upload_file()
# HTTP返回码。
# print('http status: {0}'.format(result.status))
# # 请求ID。请求ID是请求的唯一标识，强烈建议在程序日志中添加此参数。
# print('request_id: {0}'.format(result.request_id))
# # ETag是put_object方法返回值特有的属性。
# print('ETag: {0}'.format(result.etag))
# # HTTP响应头部。
# print('date: {0}'.format(result.headers['date']))
