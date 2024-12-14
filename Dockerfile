# FROM node:20-alpine

# LABEL maintainer "tanbm.hut@gmail.com"

# RUN apk update && apk add --no-cache yarn
# WORKDIR /app
# COPY ./package.json /app/package.json
# COPY ./yarn.lock /app/yarn.lock

# RUN yarn install --ignore-engines --ignore-optional

# COPY . /app
# RUN yarn build

# CMD ["yarn", "start"]

# Stage 1: Build Stage
FROM node:20-alpine AS build

LABEL maintainer="tanbm.hut@gmail.com"

RUN apk update && apk add --no-cache yarn
WORKDIR /app
COPY ./package.json ./yarn.lock /app/

RUN yarn install --ignore-engines --ignore-optional

# Copy all source files and build the project
COPY . /app
RUN yarn build

# Stage 2: Production Stage
FROM node:20-alpine AS production

LABEL maintainer="tanbm.hut@gmail.com"

RUN apk update && apk add --no-cache yarn
WORKDIR /app

COPY --from=build /app /app

# Start the application
CMD ["yarn", "start"]

