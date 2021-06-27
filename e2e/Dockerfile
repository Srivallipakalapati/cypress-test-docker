FROM cypress/base:12.1.0

RUN mkdir /app
WORKDIR /app
COPY . /app

ENV CI=1
RUN npm ci

RUN npx cypress verify