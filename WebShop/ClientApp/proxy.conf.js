////const { env } = require('process');

////const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
////  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:33908';

////const PROXY_CONFIG = [
////  {
////    context: [
////      "/weatherforecast",
////   ],
////    target: target,
////    secure: false
////  }
////]

////module.exports = PROXY_CONFIG;

const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:38078';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/analytics",
    ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
