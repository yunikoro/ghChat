FROM node:12.20.0-alpine3.10 as build-stage

WORKDIR /

COPY ./ ./

COPY ./* ./

RUN npm install
RUN npm run build

FROM nginx:1.17.7 as production-stage

COPY --from=build-stage /build /
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir /logs

CMD ["nginx", "-g", "daemon off;"]