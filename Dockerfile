FROM node:14 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
COPY . ./
RUN npm run build
#Stage 2
FROM nginx:1.20.2-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]