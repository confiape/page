FROM node:18 AS server
WORKDIR /app
COPY ./dist /app/dist
EXPOSE 4000

CMD ["node", "/app/dist/confia-pe-page/server/server.mjs"]
