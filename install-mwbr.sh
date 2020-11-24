#!/bin/bash

# Author: chankruze (chankruze@geekofia.in)
# Created: Tue Nov 24 2020 22:19:23 GMT+0530 (India Standard Time)

# Copyright (c) Geekofia 2020 and beyond

rm -rf .git/ src/ public/ node_modules/ .git* .prettier* .eslint* .babel* *.json *.md *.js *.lock *.log
sudo apt install libarchive-tools
wget https://github.com/chankruze/mwbr/archive/v1.0.0.zip
bsdtar -xf v1.0.0.zip -s'|[^/]*/||'
rm v1.0.0.zip _config.yml
git init && git add . && git commit -m "WBR: Initial Project Setup"
yarn install && yarn dev
