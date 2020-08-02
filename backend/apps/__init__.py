#!/usr/bin/python3
# encoding: utf-8


from apps.v1 import create_blueprint_v1

def register_blueprints(app):
    # 注册版本
    app.register_blueprint(create_blueprint_v1(),url_prefix='/api/v1')