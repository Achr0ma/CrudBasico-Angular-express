var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')

var mascotas = [{
    nombre:'okami',
    raza:'Kiltra',
    tipo:'grande'
}];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

    app.post('/mascota', (req, res) => {
    let mascota = {
        nombre: req.body.nombre,
        raza: req.body.raza,
        tipo: req.body.tipo
    }
    mascotas.push(mascota);
    res.send({mensaje:'Registro Guardado', mascotaGuardada: mascota});
  });

    app.get('/mascota/:id', (req, res) => {
        if (req.params.id > (mascotas.length - 1))
        {
            res.send({mensaje:'Mascota no existe'});
        }
        else{
            res.send(mascotas[req.params.id])
        }
        
  });

  app.get('/mascotas', (req, res) => {
    res.send(mascotas);
    
});
  app.put('/mascota/:id', (req, res) => {
    let mascota = {
        nombre: req.body.nombre,
        raza: req.body.raza,
        tipo: req.body.tipo
    }

    mascotas[req.params.id] = mascota;
    res.send({mensaje:'Mascota Actualizada'});
  });
  
  app.delete('/mascota/:id', (req, res) => {
    mascotas.splice(req.params.id, 1);
    res.send({codigo:1,mensaje:'Mascota Eliminada'});
  });

app.listen(8888, function(){
    console.log('se levanto el servidor');
})