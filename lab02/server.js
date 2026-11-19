require('dotenv').config({ quiet: true });

const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 4000;

app.use('/', routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
