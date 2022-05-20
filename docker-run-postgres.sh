#!/bin/bash

docker run -p 5433:5432 \
  --name postgres-polygon \
  -e POSTGRES_USER=polygon \
  -e POSTGRES_PASSWORD=123 \
  -d -v pg-polygon-data:/var/lib/postgresql/data \
  postgres
