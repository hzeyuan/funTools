#!/usr/bin/python3
# encoding: utf-8


from mongoengine import *
import datetime
from run import db


class SM(db.Document):
    # 声母表
    sm = db.StringField(max_length=10, null=False, unique=True)

    def __str__(self):
        return self.sm

    meta = {
        "collection": "rhyme_sm",
    }


class YM(db.Document):
    # 韵母表
    ym = db.StringField(max_length=10, null=False)

    def __str__(self):
        return self.ym

    meta = {
        "collection": "rhyme_ym",
    }


class Character(db.Document):
    # 汉字表
    # 不把字做主键，因为有多音字
    id = db.IntField(primary_key=True)
    character = db.StringField(max_length=10, null=False)
    csm_id = db.StringField(max_length=10)
    cym_id = db.StringField(max_length=10)

    # 0-4 五种声调
    tone = db.StringField(max_length=5, null=False)
    # 对应押韵类型
    rhyme = db.StringField(max_length=5, null=False)

    # def __str__(self):
    #     return self.character + ':' + str(self.csm) + str(self.cym) + self.tone
    # meta = {
    #     "collection": "rhyme_character",
    # }


class Phrase(db.Document):
    # 词语表
    id = db.IntField(primary_key=True)
    phrase = db.StringField(max_length=30, null=False)
    # 倒序排列每个字
    c1_id = db.StringField(max_length=10)
    c2_id = db.StringField(max_length=10)
    c3_id = db.StringField(max_length=10)
    c4_id = db.StringField(max_length=10)
    c5_id = db.StringField(max_length=10)
    c6_id = db.StringField(max_length=10)
    c7_id = db.StringField(max_length=10)

    meta = {
        "collection": "rhyme_phrase",
    }

    def __str__(self):
        return self.phrase


class Phrase1(db.Document):
    # 词语表
    id = db.IntField(primary_key=True)
    phrase = db.StringField(max_length=30, null=False)
    # 倒序排列每个字
    c1 = db.IntField()
    c2 = db.IntField()
    c3 = db.IntField()
    c4 = db.IntField()
    c5 = db.IntField()
    c6 = db.IntField()
    c7 = db.IntField()

    meta = {
        "collection": "rhyme_phrase1",
    }

    def __str__(self):
        return self.phrase


class Character1(db.Document):
    # 汉字表
    # 不把字做主键，因为有多音字
    id = db.IntField(primary_key=True)
    character = db.StringField(max_length=10, null=False)
    csm = db.StringField(max_length=10)
    cym = db.StringField(max_length=10)
    # 0-4 五种声调
    tone = db.StringField(max_length=5, null=False)
    # 对应押韵类型
    rhyme = db.StringField(max_length=5, null=False)


class Joke(db.Document):
    title = db.StringField(max_length=30, null=False)
    joke = db.StringField(max_length=300, null=False)
    zan = db.IntField(default=0)


class Shenhuifu(db.Document):
    shenhuifu = db.StringField(max_length=5500, null=False)


class Juzi(db.Document):
    src = db.StringField(max_length=5500, null=False)
