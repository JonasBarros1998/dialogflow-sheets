FROM node:14.16.0-alpine3.10 AS NodeJs
ENV DIRECTORY=/home/app
WORKDIR ${DIRECTORY}
RUN npm -g install typescript
COPY . .
EXPOSE 8080
RUN npm run build
CMD ["npm", "start"]