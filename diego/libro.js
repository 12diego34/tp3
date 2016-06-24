/*var mongoose = require('mongoose');
//var schema = mongoose.Schema;
var express = require('express');
//var libros = require('google-books-search');
//var Libro = mongoose.model('Libro');

module.exports = mongoose.model('Libro', {
	isbn: Schema.Types.Number,
	nombre: Schema.Types.String,
	preciolocal: Schema.Types.Number,
	autor: Schema.Types.String,
	editorial: Schema.Types.String,
	ranking: Schema.Types.Number,
	genero: Schema.Types.String,
	paginas:Schema.Types.Number
});

mongoose.model('Libro', Libro);
mongoose.connect('mongodb://localhost:27017/libros'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"
/*var mongoose = require('mongoose');<
//var schema = mongoose.Schema;
var express = require('express');
var libros = require('google-books-search');
//var Libro = mongoose.model('Libro');*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Libro = new Schema({
	isbn: Schema.Types.Number,
	nombre: Schema.Types.String,
	preciolocal: Schema.Types.Number,
	autor: Schema.Types.String,
	editorial: Schema.Types.String,
	ranking: Schema.Types.Number,
	genero: Schema.Types.String,
	paginas: Schema.Types.Number,
});
mongoose.model('Libro', Libro);
mongoose.connect('mongodb://localhost/libros');