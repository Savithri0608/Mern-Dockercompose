FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
#selec the port
EXPOSE 5050

CMD ["npm", "start"]

