FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev && mkdir -p /usr/src/app/dados

ENV PORT=4000

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
