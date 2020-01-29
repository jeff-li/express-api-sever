FROM node:12.14.1-alpine
WORKDIR /var/www/app
COPY package.json package-lock.json /var/www/
RUN npm install sequelize-cli -g --quiet && npm install --quiet
COPY . /var/www/app
EXPOSE 80
CMD ["npm", "start"]
