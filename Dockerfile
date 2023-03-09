# pull official base image
FROM node:18.14-alpine

# set working directory
WORKDIR /summi-ui

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# create production files
RUN npm run build --production

RUN npm install -g serve

CMD serve -s build

EXPOSE 3000
