FROM python:3.9

ENV PYTHONUNBUFFERED=1

WORKDIR /NewHome

COPY requirements.txt /NewHome/

RUN pip install -r requirements.txt

COPY . /NewHome/
