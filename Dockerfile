FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY . /usr/app

RUN npm install -g yarn

RUN yarn installl

EXPOSE 3000
CMD yarn dev
