FROM node:14.18.0-alpine3.14

LABEL maintainer="kimi@argentech.io"

WORKDIR /app

# Copy source code
COPY package.json yarn.lock app.js index.js ./ 
COPY ./src ./src

# Install dependencies
RUN yarn

# Expose service port on 8080
ENV PORT=8080
EXPOSE 8080

# Run app
CMD ["node", "index.js" ]