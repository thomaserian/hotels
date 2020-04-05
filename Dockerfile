FROM node:12

ARG NODE_ENV

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install pm2 -g

RUN npm test

EXPOSE 2000

ENTRYPOINT pm2-runtime start /app/app.config.js --env "${NODE_ENV}"
