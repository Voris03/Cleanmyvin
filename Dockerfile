FROM node:20.12.2-slim as builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
ENV NODE_ENV production

RUN yarn build

FROM node:20.12.2-slim as runner
WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]