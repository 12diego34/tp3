var Libro = require('../routes/libro');
//var Persona = require('./modelo/persona');
var Controller = require ('../routes/controller');

var express = require('express');
var router = express.Router();



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



module.exports = function(app) {
/*
	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	*/
	// application 
	/*app.get('/', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
*/
	//url INDEX O HOME
	app.get('/', function(req, res) {
		res.render('../views/index', { title: 'Libreria del Viento' });
	});

	//URL De BUSCAR 
	app.get('/buscar', function(req, res, next) {
 		res.render('../views/search', { title: 'Buscar' });
	});




	app.get('/libro', function(req, res) {
		res.sendfile('./angular/indexanterior.html'); // Carga única de la vista
	});

	/*router.get('/buscar', function(req, res, next) {
 		res.render('search', { title: 'Buscar' });
	});


	app.get('/buscar', function(req, res, next) {
 		res.render('/search', { title: 'Buscar' });
	});

*/
	
	app.get('/catalogo', function(req, res, next) {
 		res.sendfile('./angular/catalogo.html', { title: 'Insertar' });
	});
	/*este anda*/
	app.get('/catalogo2', function(req, res, next) {
 		res.render('../views/catalogo', { title: 'catalogo' });
	});
	app.get('/api/libro', Controller.getLibro);
	app.post('/api/libro', Controller.setLibro);
	app.put('/api/libro/:libro_id', Controller.updateLibro);
	app.delete('/api/libro/:libro_id', Controller.removeLibro);
};