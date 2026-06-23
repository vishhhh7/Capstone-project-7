#!/bin/bash

cd /home/ec2-user/Capstone-project-7

npm install

pm2 restart capstone-proj-7 || pm2 start app.js --name capstone-proj-7