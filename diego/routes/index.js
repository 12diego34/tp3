var express = require('express');
var router = express.Router();
//var Libro = require('./modelo/persona');
//var Controller = require ('./api');

/* GET index page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Libreria del Viento' });
});

router.get('/buscar', function(req, res, next) {
 	res.render('search', { title: 'Buscar' });
});

router.get('/libros/coleccion', function(req, res, next) {
	res.render('collection', { title: 'Buscar' });
});

router.get('/catalogo', function(req, res, next) {
	res.render('catalogo', { title: 'Catalogo' });
});

//app.get('/catalogo', Controller.getLibro);

module.exports = router;
