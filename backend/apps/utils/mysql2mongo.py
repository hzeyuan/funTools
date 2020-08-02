import pandas as pd
from sqlalchemy import create_engine
from pymongo import MongoClient
import json
import time


class MongoBase:
    def __init__(self, collection):
        self.collection = collection
        self.OpenDB()

    def read_mysql(self):
        engine = create_engine(
            'mysql+pymysql://root:q58625157@localhost:3306/rhymesearch?charset=utf8')  # 用sqlalchemy创建引擎
        start = time.time()
        # max_id=self.get_max_id()
        df1 = pd.read_sql(f'select * from rhyme_ym', engine)  # 从数据库中读取表存为DataFrame
        end = time.time()
        print("查询完毕条数", end - start)
        # df1.drop_duplicates('phone', keep='first', inplace=True)   #保持phone第一列位置不变
        # df1.insert(1, 'url', df1['phone'])  #在phone列后面插入一个url列，值和phone的值一样
        return df1

    def OpenDB(self):
        self.con = MongoClient(host='127.0.0.1')
        self.db = self.con[self.collection]
        self.collection = self.db['rhyme_ym']

    def closeDB(self):
        self.con.close()

    def get_max_id(self):
        max_id = self.collection.find().sort([('primary_key', -1)]).limit(1)[0]
        if max_id:
            return max_id.get("primary_key")


if __name__ == '__main__':
    start = time.time()
    mongo = MongoBase('rhymesearch')
    df = mongo.read_mysql()
    mongo.collection.insert(json.loads(df.T.to_json()).values())
    mongo.closeDB()
    end = time.time()
    print("运行完成所用时", end - start)
