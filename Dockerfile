FROM node:14.16.0-alpine3.10 AS build
ENV DIRECTORY=/home/app
WORKDIR ${DIRECTORY}
RUN npm -g install typescript
COPY ["package.json", "./"]
WORKDIR ${DIRECTORY}/src
COPY ["./src", "."]
WORKDIR ${DIRECTORY}
RUN npm install
COPY ["./env.json", "./credentials.json", "./tsconfig.json", "./jest.config.js", "./babel.config.js", "./"]
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
