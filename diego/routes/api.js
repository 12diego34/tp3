var mongoose = require('mongoose');
var Libro = mongoose.model('Libro');
var books = require('google-books-search');


//var Libro = require('./modelo/libro');

// Obtiene todos los objetos Persona de la base de datos
exports.getLibro = function (req, res){
    Libro.find(
        function(err, libro) {
            if (err)
                res.send(err)
                    res.json(libro); // devuelve todas las Personas en JSON       
                }
            );
}

exports.books = function(req, res, next) {
    var titulos = [];
    Libro.find({}, function(err, libros) {
        libros.forEach(function(libro){
            titulos.push(libro.data.title);
        })
        res.json({ books: titulos});  
    });
}

exports.show = function(req, res, next) {
    var book_id = req.params.id;
    if(book_id){
        books.lookup(book_id, function(error, result) {
            res.json({ book: result });
        });
    }else
        res.json({ book: "error: especificar un id de libro correcto"});
}

exports.search = function (req, res, next) {
    if (req.method === "GET"){
        res.json({ resultados: [] });
    } else {
        var termino = req.body.search_term;
        var options = {'limit': 5};
        books.search(termino, options, function(error, results) {
            if ( ! error )
                res.json({resultados: results});
            });
    }
}

exports.save = function (req, res, next) {
    var book_to_save = req.params.id;
    if(book_to_save){
        books.lookup(book_to_save, function(error, result) {
            if (result){
/*                new Libro({
                    valoracion : 5,
                    precio: 1000.50,
                    data: result
                }).save(function(err, libro, count){
                    //console.log(libro, "Guardado!");
                })
*/              res.json({msg: "Libro Guardado!"})
            }else
                res.json({msg: "Error: no se encontro el id: "+ book_to_save })
        });
    }else
        res.json({msg: "Error: especificar un id de libro correcto" });
}


