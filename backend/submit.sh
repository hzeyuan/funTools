#!/usr/bin/env bash
pip freeze -> requirements.txt

git add .
git commit -m "笑话大全api,更新笑话"
git push origin master
echo "done"

##