#!/bin/bash
cd /var/www/html/be/fv-teilim-be/
git checkout main
git pull origin main
yarn install
yarn build
pm2 restart teilim