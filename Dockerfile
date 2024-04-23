# FROM node:20.12.2-slim as builder
# WORKDIR /app

# COPY package.json yarn.lock ./
# RUN yarn --frozen-lockfile

# COPY . .
# ENV NODE_ENV production

# RUN yarn build

# FROM node:20.12.2-slim as runner
# WORKDIR /app

# COPY --from=builder /app/package.json .
# COPY --from=builder /app/yarn.lock .
# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public

# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# EXPOSE 3000

# ENTRYPOINT ["yarn", "start"]

FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN yarn add sharp

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]