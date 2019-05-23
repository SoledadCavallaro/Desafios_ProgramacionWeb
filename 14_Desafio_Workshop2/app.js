//apps.js setea rutas vistas y levanta el servidor:

var express = require('express');
var app = express();

//el .pug ubicado en la carpeta views reemplaza el archivo html:
app.set('view engine', 'pug');

// para acceder a archivos estaticos que tengo en la carpeta creada publico, como js css imagenes etc ( no html) 
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/peliculas', function(req, res){
  res.render('peliculas');
})

app.get('/planetas', function(req, res){
  res.render('planetas');
})

app.get('/contactos', function(req, res){
  res.render('contactos');
})

// al app. listen se le da el puerto (3000) y funcion 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
