# CardanoBI API Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ git clone https://github.com/cardanobi/cardanobi-docs.git
$ cd cardanobi-docs
$ npm install
```

## Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment over HTTPS as a dynamic content

Using SSH:

```
$ HTTPS=true SSL_CRT_FILE=./YOUR_CRT_FILE.pem SSL_KEY_FILE=./YOUR_PRIVATE_KEY.pem npm run start -- --port 4567 --host 0.0.0.0
```
