FROM node:16.13.0

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . ./

CMD [ "npm", "run", "start" ]

RUN bash ./healthcheck/script/healthcheck 5 30 server-container