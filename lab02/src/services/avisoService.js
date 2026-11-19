const fs = require('fs');
const path = require('path');

// No container (WORKDIR /usr/src/app) resolve para /usr/src/app/dados/aviso.txt
const AVISO_PATH = path.join(__dirname, '..', '..', 'dados', 'aviso.txt');

function lerAviso() {
  try {
    if (!fs.existsSync(AVISO_PATH)) {
      return 'O arquivo aviso.txt não foi montado no container.';
    }
    return fs.readFileSync(AVISO_PATH, 'utf8').trim();
  } catch (error) {
    return 'Erro ao tentar ler o arquivo.';
  }
}

module.exports = { lerAviso };
