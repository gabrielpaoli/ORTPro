const express = require("express");
const app = express();
const profesionales = require('./json/profesionales.json');

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/api/v1/mapData', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  res.json(profesionales);
});