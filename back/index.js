const express = require("express");
const https = require('https')

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

function getContratadosPorTipo(contratadosO) {
  let data = {};

  let plomeros = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Plomero";
  });
  let gasistas = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Gasista";
  });
  let pintores = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Pintor";
  });
  let albaniles = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Albañil";
  });
  let carpinteros = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Carpintero";
  });
  let herreros = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Herrero";
  });
  let costureras = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Costurera";
  });
  let cocineras = contratadosO.filter(function (element) {
    return element.profesional.profesion == "Cocinera";
  });

  let contratadosPorTipo = [
    plomeros.length,
    gasistas.length,
    pintores.length,
    albaniles.length,
    carpinteros.length,
    herreros.length,
    costureras.length,
    cocineras.length,
  ];

  let labelsContratadosPorTipo = [
    "Plomero",
    "Gasista",
    "Pintor",
    "Albanil",
    "Carpintero",
    "Herrero",
    "Costurera",
    "Cocinera",
  ];

  data.labelsContratadosPorTipo = labelsContratadosPorTipo;
  data.contratadosPorTipo = contratadosPorTipo;
  return data;
}

function getProfesionalesPorTipo(profesionales) {
  let data = {};

  let plomeros = profesionales.filter(function (element) {
    return element.properties.profesion == "Plomero";
  });
  let gasistas = profesionales.filter(function (element) {
    return element.properties.profesion == "Gasista";
  });
  let pintores = profesionales.filter(function (element) {
    return element.properties.profesion == "Pintor";
  });
  let albaniles = profesionales.filter(function (element) {
    return element.properties.profesion == "Albañil";
  });
  let carpinteros = profesionales.filter(function (element) {
    return element.properties.profesion == "Carpintero";
  });
  let herreros = profesionales.filter(function (element) {
    return element.properties.profesion == "Herrero";
  });
  let costureras = profesionales.filter(function (element) {
    return element.properties.profesion == "Costurera";
  });
  let cocineras = profesionales.filter(function (element) {
    return element.properties.profesion == "Cocinera";
  });

  let profesionalesPorTipo = [
    plomeros.length,
    gasistas.length,
    pintores.length,
    albaniles.length,
    carpinteros.length,
    herreros.length,
    costureras.length,
    cocineras.length,
  ];

  let labelsProfesionalesPorTipo = [
    "Plomero",
    "Gasista",
    "Pintor",
    "Albanil",
    "Carpintero",
    "Herrero",
    "Costurera",
    "Cocinera",
  ];

  data.labelsProfesionalesPorTipo = labelsProfesionalesPorTipo;
  data.profesionalesPorTipo = profesionalesPorTipo;
  return data;
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
  let datos = {};
  let contratados = {};
  let contratadosF = [];
  let votosPorTipo = [];
  let votosPorProfesional = 0;
  let contador = 0;
  fs.readFile('./json/contratados.json', 'utf-8', (err, source) => {
    if (err) throw err;
    contratados = JSON.parse(source);
    const contratadosO = contratados.contratados;
    contratadosF = contratadosO.filter(
      (profesional, index, self) =>
        index === self.findIndex((t) => t.profesional.id === profesional.profesional.id)
    );

    contratadosF.forEach(function (contratadoF) {
      votosPorProfesional = 0;
      contador = 0;
      votosPorTipo = [];
      contratadosO.forEach(function (contratadoO) {
        if(contratadoF.id === contratadoO.id){
          votosPorProfesional += contratadoO.voto;
          votosPorTipo.push(contratadoO.voto);
          contador++
        }

        contratadoF.numeroDeContrataciones = contador;

        contratadoF.sinVoto = votosPorTipo.filter((x) => x == 0).length;
        contratadoF.voto1 = votosPorTipo.filter((x) => x == 1).length;
        contratadoF.voto2 = votosPorTipo.filter((x) => x == 2).length;
        contratadoF.voto3 = votosPorTipo.filter((x) => x == 3).length;
        contratadoF.voto4 = votosPorTipo.filter((x) => x == 4).length;
        contratadoF.voto5 = votosPorTipo.filter((x) => x == 5).length;

        if(contador > 0){
          contratadoF.votoTotal = Math.round(votosPorProfesional / contador);
        }else{
          contratadoF.votoTotal = votosPorProfesional
        }
      });

    });

    datos.contratados = contratadosF;
    datos.cantidadDeContratados = contratadosO.length;
    datos.cantidadDeProfesionales = profesionales.profesionales.length;

    let CPT = getContratadosPorTipo(contratadosO);
    let PPT = getProfesionalesPorTipo(profesionales.profesionales);

    datos.contratadosPorTipo = CPT.contratadosPorTipo;
    datos.labelsContratadosPorTipo = CPT.labelsContratadosPorTipo;
    datos.profesionalesPorTipo = PPT.profesionalesPorTipo;
    datos.labelsProfesionalesPorTipo = PPT.labelsProfesionalesPorTipo;
    res.json(datos);
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

app.get('/api/v1/getAllContratadosSinFiltro', function (req, res) {
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
    res.json(contratadosO);
  });
});

