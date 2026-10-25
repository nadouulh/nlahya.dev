# Stage 1: deps
FROM docker.io/library/node:22.23-alpine3.24 AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Stage 2: lint, then static export (out/); next build also type-checks
FROM docker.io/library/node:22.23-alpine3.24 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable pnpm && pnpm lint && pnpm build

# Stage 3: serve the static files
# Fully qualified image names: Podman does not assume Docker Hub.
# nginx-unprivileged runs as uid 101 and keeps its runtime files in /tmp, so the
# VPS Quadlet can mount the rootfs read-only. stable-alpine + `pull: true` in CI
# picks up base image security fixes on every build.
FROM docker.io/nginxinc/nginx-unprivileged:stable-alpine AS runner
# Apply Alpine security fixes released after the base image was built
USER root
RUN apk upgrade --no-cache
USER 101
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/security-headers.conf
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 3000
