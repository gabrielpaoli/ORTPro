const express = require("express");
const app = express();



app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});


app.get('/api/v1/profiles/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  const id = req.params.id;

  const data = {
    profiles: [
    {
      id: 0,
      nombre: "Fulano de tal",
      profesion: "Plomero",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      id: 1,
      nombre: "Mengano",
      profesion: "Gasista",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200?',
    },
    {
      id: 2,
      nombre: "Sultano",
      profesion: "Gasista",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200??',
    }
    ]
  }

  const persona = data.profiles.filter((obj) => obj.id == id);
  res.end(JSON.stringify({persona}));
});





app.get('/api/v1/mapData', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({ 
      type: "FeatureCollection",
      features: [
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -38.3613558,
                  -8.8044875
                ]
              },
              properties: {
                id: 0,
                nombre: "Fulano de tal",
                profesion: "Plomero",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200',
              }
          },
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -36.3613558,
                  -8.8044875
                ]
              },
              properties: {
                id: 1,
                nombre: "Mengano",
                profesion: "Gasista",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200?',
              }
          },
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -34.3613558,
                  -8.8044875
                ]
              },
              properties: {
                id: 2,
                nombre: "Sultano",
                profesion: "Gasista",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200??',
              }
          }
      ]
  
    
    }));
  });