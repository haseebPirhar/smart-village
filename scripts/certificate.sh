#!/bin/bash
mkdir -p assets/certs
cd assets/certs
openssl genrsa -out key.pem 2048
openssl req -new -key key.pem -out csr.pem \
  -subj "/C=PK/ST=Punjab/L=Lahore/O=Invo/CN=dev"
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

rm csr.pem