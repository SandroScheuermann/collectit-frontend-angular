FROM node:20-alpine AS build
WORKDIR /muscler-frontend

COPY src ./src/
COPY package*.json .
COPY angular.json .
COPY tsconfig*.json .

RUN npm cache clean --force
RUN npm install
RUN npm run build -- --configuration production

FROM nginx:alpine

COPY --from=build /muscler-frontend/dist/muscler /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
