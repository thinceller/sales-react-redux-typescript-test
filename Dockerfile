FROM ruby:2.4-alpine

ENV LANG C.UTF-8
ENV HOME /app

WORKDIR $HOME

COPY Gemfile $HOME
COPY Gemfile.lock $HOME

RUN apk update \
  && apk add --no-cache build-base tzdata libxml2-dev libxslt-dev sqlite-dev nodejs \
  && bundle install

EXPOSE 3000
