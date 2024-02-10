FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN NODE_ENV=development npm i
COPY . .
RUN npm run build
EXPOSE 9834
CMD [ "npm", "run", "preview" ]