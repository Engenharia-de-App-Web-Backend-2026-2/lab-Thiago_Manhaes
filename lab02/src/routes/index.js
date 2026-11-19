const express = require('express');
const { lerAviso } = require('../services/avisoService');
const { obterInfo } = require('../services/infoService');

const router = express.Router();

let requestCount = 0;

router.get('/', (req, res) => {
  requestCount++;
  res.json({
    status: 'Online',
    message: 'Api executando com sucesso',
    requests: requestCount,
  });
});

router.get('/info', (req, res) => {
  res.json(obterInfo());
});

router.get('/aviso', (req, res) => {
  res.json({ aviso: lerAviso() });
});

module.exports = router;
