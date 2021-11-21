const express = require("express");

const app = express();
app.use(express.text());
app.use(express.json());

var fs = require('fs');

const profesionales = require('./json/profesionales.json');

app.listen(3000, () => {
  clearContratados();
 console.log("El servidor está inicializado en el puerto 3000");
});

function clearContratados() {
  
  const data = {};
  data.contratados = [];
  fs.writeFile('./json/contratados.json', JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('Contratados: REINICIADO');
    });
     
}

app.get('/api/v1/mapData', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let featureCollection = {}
  
  featureCollection.type = "FeatureCollection";
  featureCollection.features = [];
  profesionales.profesionales.forEach(profesional => {
    profesional.type = "Feature";
    featureCollection.features.push(profesional);
  });
  res.json(featureCollection);
});

app.post('/api/v1/contratar', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let contratados = {};

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const obj = {}
    const voto = 0;
    const contratadosO = contratados.contratados;
    const { profesional, profesionalId, mailUsuario } = JSON.parse(req.body)
    obj.id = profesionalId;
    obj.id_user = mailUsuario;
    obj.voto = voto;
    obj.profesional = profesional;
    obj.profesional.contratado = true;
    
    contratadosO.push(obj);
  
    fs.writeFile('./json/contratados.json', JSON.stringify(contratados), function(err) {
      if (err) throw err;
      console.log('Se contrato profesional');
      });
  });

  res.send(req.body);
});

app.get('/api/v1/getContratadosPorUsuario', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let contratados = {};
  let contratadosFinded = [];

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    const  mailUsuario = req.query.mailUsuario
    contratadosFinded = contratadosO.filter((p) => p.id_user === mailUsuario);
    res.json(contratadosFinded);
  });

});


app.get('/api/v1/getVoto', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let contratados = {};
  let voto = [];

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    const  profesionalId  = req.query.profesionalId;
    const  mailUsuario  = req.query.mailUsuario;
    voto = contratadosO.find((p) => p.id === parseInt(profesionalId) && p.id_user == mailUsuario);
    res.json(voto);
  });
});

app.get('/api/v1/getContratado', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let contratados = {};
  let contratadoResult = null;

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    const  idContratado  = req.query.idContratado;
    const  mailUsuario  = req.query.mailUsuario;
    contratadoResult = contratadosO.find(
      (p) => p.id === parseInt(idContratado) && p.id_user === mailUsuario
    );
    if(typeof contratadoResult !== 'undefined'){
      res.json(contratadoResult);
    }else{
      res.json(null);
    }
  });

});

app.get('/api/v1/getAllContratados', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  let contratados = {};
  let contratadosF = [];
  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    contratadosF = contratadosO.filter(
      (profesional, index, self) =>
        index === self.findIndex((t) => t.profesional.id === profesional.profesional.id)
    );
    res.json(contratadosF);
  });
});

app.get('/api/v1/getVotosTotal', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  let contratados = {};

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    const  profesionalId  = req.query.profesionalId;

    const profesionales = contratadosO.filter(
      (p) => p.id === parseInt(profesionalId)
    );
    let voto = 0;
    let i = 0;
    let votoTotal = 0;
    profesionales.forEach(function (element) {
      voto += element.voto;
      if (voto != 0) {
        i++;
      }
    });

    if (i > 0) {
      votoTotal = voto / i;
    }
    res.json(votoTotal);
  });
});

app.post('/api/v1/puntuar', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');

  let contratados = {};

  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const { puntaje, profesionalId, mailUsuario } = JSON.parse(req.body);
    
    const contratadoIndex = contratados.contratados.findIndex(
      (p) => p.id === profesionalId && p.id_user === mailUsuario
    );
    contratados.contratados[contratadoIndex].voto = puntaje;

    fs.writeFile('./json/contratados.json', JSON.stringify(contratados), function(err) {
      if (err) throw err;
      console.log('Se agrego el voto');
      });
    
  });
  res.status(200).send(req.body)

});
