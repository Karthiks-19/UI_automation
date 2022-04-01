#!/bin/bash
set -ex
docker rm --force docker-chrome

docker run -d -p 4447:4444 -p 7907:7900 --shm-size="2g" --name docker-chrome -e VNC_NO_PASSWORD=1 selenium/standalone-chrome

sleep 5

npx wdio run ./docker-wdio.conf.js $@

docker rm --force docker-chrome