FROM node:14.16.0-alpine3.10 AS NodeJs
ENV DIRECTORY=/home/app
WORKDIR ${DIRECTORY}
RUN npm -g install typescript
COPY . .
EXPOSE 8080

FROM NodeJs AS developer
CMD npm install && npm run dev