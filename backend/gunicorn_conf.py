# config.py
import os
import gevent.monkey
gevent.monkey.patch_all()

import multiprocessing

# debug = True
loglevel = 'debug'
bind = "0.0.0.0:5000"
pidfile = "./gunicorn.pid"
accesslog = "/var/log/access.log"
errorlog = "/var/log/debug.log"
daemon = True
reload = True
# 启动的进程数
workers = multiprocessing.cpu_count()
worker_class = 'gevent'
x_forwarded_for_header = 'X-FORWARDED-FOR'