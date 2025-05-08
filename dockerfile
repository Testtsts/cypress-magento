FROM node:22.2.0-bookworm

RUN apt-get update -y && apt-get install -y \ 
 libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /app
COPY . ./

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get -y install ./google-chrome-stable_current_amd64.deb

RUN npm ci || echo "npm ci failed fallback to npm install" && npm install 