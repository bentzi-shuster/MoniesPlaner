# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

RUN apt-get update && apt-get install -y \
    curl \
    xvfb \
    x11vnc \
    fluxbox \
    wget

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# install curl
RUN apt-get update && apt-get install -y curl

# install Playwright dependencies
RUN wget -qO- https://playwright.azureedge.net/builds/deps/playwright.sh | sh --

# install Pyppeteer browsers
RUN python -m playwright install

COPY . .

EXPOSE 5000

CMD ["xvfb-run", "-a", "-s", "-screen 0 1400x900x24", "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
