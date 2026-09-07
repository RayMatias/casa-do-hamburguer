FROM node:24-alpine AS dev
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 3000
CMD [ "npm", "run","dev" ]