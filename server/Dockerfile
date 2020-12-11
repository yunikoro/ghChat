FROM node:15.3.0-alpine3.10 as build-stage

WORKDIR /build

COPY ./ ./
COPY ./* ./

RUN npm install
RUN npm run build



FROM centos:8 as production-stage
FROM node:15.3.0-alpine3.10 as production-stage
FROM keymetrics/pm2:14-alpine as production-stage

CMD ["mkdir", "/pmto"]

COPY --from=build-stage /build /pmto

# CMD ["cd", "/pmto"]
CMD ["cd", "/pmto", "&&", "npm", "run", "start:prod"]