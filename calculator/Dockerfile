
FROM node:alpine
 
# A directory within the virtualized Docker environment

WORKDIR /calculator
 
# Copies package.json and package-lock.json to Docker environment
COPY package.json .
 
# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 8080
 
# Finally runs the application
CMD [ "npm", "start" ]