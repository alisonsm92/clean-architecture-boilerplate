FROM node:12.14.1-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]