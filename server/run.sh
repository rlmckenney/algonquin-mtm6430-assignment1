#!/bin/bash
docker stop dev-server
docker rm dev-server
docker run --name dev-server -v "$PWD"/app:/usr/share/nginx/html -v "$PWD"/server/nginx.conf:/etc/nginx/nginx.conf:ro -p 80:80 -d nginx  
