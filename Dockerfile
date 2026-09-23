FROM node:24-alpine AS dev
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run","dev" ]