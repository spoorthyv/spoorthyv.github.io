#!/bin/bash

bundle exec middleman build
git add -A
git commit -m "$1"
git push origin AllFiles
git subtree push --prefix build origin master
