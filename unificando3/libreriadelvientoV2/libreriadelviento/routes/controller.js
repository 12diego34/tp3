
//PARTE DE LIBRO
var Libro = require('../routes/libro');

// Obtiene todos los objetos Libro de la base de datos
module.exports.getLibro = function (req, res){
	Libro.find(
		function(err, libro) {
			if (err)
				res.send(err)
					res.json(libro); // devuelve todas los Libros en JSON		
				}
			);
}

// Guarda un objeto Libro en base de datos
module.exports.setLibro = function(req, res) {

		// Creo el objeto Libro
		Libro.create(
			{nombre : req.body.nombre,
				isbn: req.body.isbn, 
				preciolocal: req.body.preciolocal,
				autor: req.body.autor,
				//portada: req.body.portada,
				editorial: req.body.editorial,
				ranking: req.body.ranking,
				genero: req.body.genero,
				paginas: req.body.paginas

			}, 
			function(err, libro) {
				if (err)
					res.send(err);
				// Obtine y devuelve todos los libros tras crear uno de ellos
				Libro.find(function(err, libro) {
				 	if (err)
				 		res.send(err)
				 	res.json(libro);
				});
			});
	}

// Modificamos un objeto Libro de la base de datos
module.exports.updateLibro = function(req, res){
	Libro.update( {_id : req.params.libro_id},
					{$set:{nombre : req.body.nombre,isbn: req.body.isbn, 
				preciolocal: req.body.preciolocal,autor: req.body.autor,
				//portada: req.body.portada,
				editorial: req.body.editorial,ranking: req.body.ranking,
				genero: req.body.genero,paginas: req.body.paginas

					}}, 
					function(err, libro) {
						if (err)
							res.send(err);
				Libro.find(function(err, libro) {
				 	if (err)
				 		res.send(err)
				 	res.json(libro);
				});
			});
	}

// Elimino un objeto Libro de la base de Datos
module.exports.removeLibro = function(req, res) {
	Libro.remove({_id : req.params.libro_id}, function(err, libro) {
		if (err)
			res.send(err);
			Libro.find(function(err, libro) {
				if (err)
					res.send(err)
				res.json(libro);
			});
		});
}