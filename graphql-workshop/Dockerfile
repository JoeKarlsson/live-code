FROM node:9.4.0
RUN npm install --global npm@5.6.0

ENV HOME=/home/app
WORKDIR $HOME/graphqlWorkshop

COPY package.json $HOME/graphqlWorkshop

RUN npm install

COPY . $HOME/graphqlWorkshop

EXPOSE 3001

CMD ["npm", "start"]
