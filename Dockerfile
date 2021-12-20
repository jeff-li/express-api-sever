FROM node:16-bullseye
WORKDIR /var/www/app
COPY package.json package-lock.json /var/www/
RUN npm install --quiet
COPY . /var/www/app
EXPOSE 3000
CMD ["npm", "start"]
