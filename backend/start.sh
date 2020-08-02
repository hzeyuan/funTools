#!/usr/bin/env bash
cd /root/wngj-api
git pull
source /root/venv/bin/activate
gunicorn -c gunicorn_conf.py run:application
sleep 1
netstat -tunlp
