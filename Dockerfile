FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY src/ ./src/

EXPOSE 80

CMD ["npm", "start"]
