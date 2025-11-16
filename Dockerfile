# Stage 1: build
FROM node:24-slim AS builder
WORKDIR /app

COPY . .
RUN yarn install

ENV NODE_ENV=development
ENV PORT=3000
WORKDIR /app

EXPOSE 3000

CMD ["npm", "run", "dev"]