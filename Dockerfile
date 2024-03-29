FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install typescript -g

COPY . .

CMD npm run dev