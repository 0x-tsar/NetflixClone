'use strict'
const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const router = require('./router.js');

const PORT = 5001;

const app = new Koa();

app
  .use(cors())
  .use(serve('build')) // serving static files
  .use(router.routes());

console.log(`server running on port ${PORT}`)

app.listen(process.env.PORT || PORT);



