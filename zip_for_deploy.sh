#!/usr/bin/env bash

npm install

gulp rebuild

gulp copy

zip -r mf_landing_page.zip .