FROM node:16-alpine
RUN yarn install --prod
ENTRYPOINT yarn start
