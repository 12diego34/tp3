var mongoose = require('mongoose');
//var schema = mongoose.Schema;
var express = require('express');
var libros = require('google-books-search');
//var Libro = mongoose.model('Libro');

module.exports = mongoose.model('Libro', {
	isbn:Number,
	nombre: String,
	preciolocal:Number,
	autor:String,
	//portada:Schema.Types.??
	editorial:String,
	ranking:Number,
	genero:String,
	paginas:Number,
});