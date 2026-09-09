FROM node:24-alpine AS dev
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "npm", "run","dev" ]