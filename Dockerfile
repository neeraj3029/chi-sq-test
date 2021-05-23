FROM node:10

USER node

WORKDIR /home/node/code

COPY --chown=node:node  . .

RUN npm ci

CMD ["bash"]
