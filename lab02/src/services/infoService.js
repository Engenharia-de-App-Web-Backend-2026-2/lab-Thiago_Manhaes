const os = require('os');

function obterInfo() {
  return {
    message: process.env.APP_MESSAGE || 'APP_MESSAGE não definida',
    hostname: os.hostname(), // dentro do container = ID do container
    port: process.env.PORT || 4000,
  };
}

module.exports = { obterInfo };
