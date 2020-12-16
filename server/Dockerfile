FROM node:12.20.0-alpine3.10 as build-stage

WORKDIR /build

COPY ./ ./
COPY ./* ./

RUN npm install
RUN npm run build



FROM node:12.20.0-alpine3.10 as production-stage
FROM keymetrics/pm2:14-alpine

RUN mkdir /pmto

COPY --from=build-stage /build /pmto

WORKDIR /pmto

CMD ["npm", "run", "start-docker:prod"]

EXPOSE 3000