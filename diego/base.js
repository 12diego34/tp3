var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Libro = new Schema({
	id: Schema.Types.ObjectId,
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
