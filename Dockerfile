FROM google/cloud-sdk:latest

RUN apt-get update \
 && apt-get install -y nodejs npm

WORKDIR /app
COPY . .

RUN npm install
CMD ["node", "index.js"]
