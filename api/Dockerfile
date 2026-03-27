FROM node:22-alpine
WORKDIR /app

COPY api ./api

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "api/server.mjs"]
