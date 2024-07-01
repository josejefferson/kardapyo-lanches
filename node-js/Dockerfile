FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn prisma generate

EXPOSE 3000

CMD ["yarn", "start"]
