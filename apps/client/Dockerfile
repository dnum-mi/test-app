ARG BASE_IMAGE=docker.io/oven/bun:1.3.3
ARG PROD_IMAGE=docker.io/nginxinc/nginx-unprivileged:1.29.2-alpine

# Base
FROM ${BASE_IMAGE} AS base

WORKDIR /app
COPY ./package.json ./bun.lock ./


# Install
FROM base AS install

COPY ./ ./
RUN bun install --ignore-scripts


# Dev
FROM base AS dev

COPY --from=install /app/node_modules ./node_modules
COPY ./ ./
ENTRYPOINT [ "bun", "run", "dev" ]


# Build
FROM base AS build

ENV NODE_ENV=production
COPY --from=install /app/node_modules ./node_modules
COPY ./ ./
RUN bun run build


# Prod
FROM ${PROD_IMAGE} AS prod

USER 0
COPY --chown=1001:0 --chmod=770 --from=build /app/dist /usr/share/nginx/html/
COPY --chown=1001:0 --chmod=660 ./nginx/nginx-static.conf /etc/nginx/conf.d/default.conf
COPY --chown=1001:0 ./nginx/entrypoint.sh /docker-entrypoint-initdb.d/load-env.sh
USER 1001
EXPOSE 8080
