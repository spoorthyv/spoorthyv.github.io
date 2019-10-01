#!/bin/bash

bundle exec middleman build
git add -A
git commit -m "Update build"
git push origin AllFiles
git subtree push --prefix build origin master
