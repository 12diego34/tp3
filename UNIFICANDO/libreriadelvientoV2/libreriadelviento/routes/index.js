var express = require('express');
var router = express.Router();


var Libro = require('../routes/libro');
//var Persona = require('./modelo/persona');
var Controller = require ('../routes/controller');


/* GET index page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Libreria del Viento' });
});

router.get('/buscar', function(req, res, next) {
 	res.render('search', { title: 'Buscar' });
});

router.get('/catalogo', function(req, res, next) {
	res.render('catalogo', { title: 'Catalogo' });
});




module.exports = router;
