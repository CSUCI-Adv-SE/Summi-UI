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

# start app
CMD ["npm", "start", "0.0.0.0:3000"]
