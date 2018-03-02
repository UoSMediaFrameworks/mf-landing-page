#!/usr/bin/env bash

echo "changing directory for dep install in page_source"
cd page_source
echo "dep install"
npm install
echo "going back to for gulp task"
cd ..
echo "running gulp task rebuild"
./node_modules/.bin/gulp rebuild
echo "running gulp task copy"
./node_modules/.bin/gulp copy