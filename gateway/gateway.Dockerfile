# Build stage
FROM node:18 as build
WORKDIR /app
COPY src ./src
COPY package.json package-lock.json tsconfig.json tsconfig.build.json nest-cli.json ./
RUN npm install
RUN npm run build
RUN npm prune --omit=dev

# Distroless stage
FROM gcr.io/distroless/nodejs:18
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
CMD ["/app/dist/main/index.js"]
