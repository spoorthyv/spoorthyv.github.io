#!/bin/bash

npm run build
git add -A
git commit -m "$1"
git push origin react
git subtree push --prefix build origin master
