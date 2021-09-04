FROM node:16-alpine

RUN yarn install --prod
COPY . .
ENTRYPOINT yarn start
