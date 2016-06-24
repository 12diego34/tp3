angular.module('bookSearchClient', ["ngRoute"])
.controller('IndexController', IndexController)
.controller('SearchBookController', SearchBookController)
.controller('ShowBookController', ShowBookController)
.controller('SaveBookController', SaveBookController)
.controller('LibroController', LibroController)

//var Libro = mongoose.model('Libro');
var books = require('google-books-search');

function IndexController($scope, $http) {
    $http.get('/books/collection')
        .success(function(data, status, headers, config) {
            $scope.books = data.books;
        });
}

function SaveBookController($scope, $http, $location) {
    $scope.form = {};
    $scope.saveBook = function () {
        $http.post('/books/save', $scope.form)
            .success(function(data) {
                $location.path('/');
            });
    };
}

function ShowBookController($scope, $http, $routeParams) {
    $scope.showBook = function(){
        var id = this.resultado.id;
        $http.get('/books/show/' + id)
            .then(function(result){
                console.log(JSON.stringify(result.data.book, null, 2));
                var book = result.data.book;
                //var $title = $('#modal-info-libro .modal-title .titulo');
            }, function(error){
                console.log("error!", error.responseText);
            });
    }
}

function SearchBookController($scope, $http, $routeParams) {
    $scope.form = {};
    $scope.resultados = {};
    $scope.busqueda = false;
    $scope.sendForm = function () {
        $scope.buscando = true;
        $http.post('/books/search', $scope.form)
            .then(function(result) {
                $scope.busqueda = true;
                $scope.buscando = false;
                $scope.resultados = result.data.resultados;
            }, function(){
                $scope.buscando = false;
                console.log('SearchBookController: hubo un error');
            });
    };
}
//angular.module('MainApp', [])
//.controller('LibroController', LibroController);
//var Libro = require('./routes/libro');
//var routes = require('./routes/index');

module.exports.getLibro = function (req, res){
    Libro.find(
        function(err, libro) {
            if (err)
                res.send(err)
                    res.json(libro); // devuelve todas los Libros en JSON       
                }
            );
}

function LibroController($scope, $http) {
    $scope.newLibro = {};
    $scope.libros = {};
    console.log(libros);
    console.log($scope);
    $scope.selected = false;

    // Obtenemos todos los datos desde la base de datos
    /*$http.get('/catalogo').success(function(data) {
        $scope.libros = data;
    })
    .error(function(data) {
        console.log('Error: ' + data);
    });*/

    $scope.getLibro = function (req, res){
    Libro.find(
        function(err, libro) {
            if (err)
                res.send(err)
                    res.json(libro); // devuelve todas los Libros en JSON       
                }
            );
    }

    // Función para registrar a un libro
    $scope.registrarLibro = function() {
        $http.post('/api/libro', $scope.newLibro)
        .success(function(data) {
                $scope.newLibro = {}; // Borramos los datos del formulario
                $scope.libros = data;
            })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    // Función para editar los datos de un libro
    $scope.modificarLibro = function(newLibro) {
        $http.put('/api/libro/' + $scope.newLibro._id, $scope.newLibro)
        .success(function(data) {
                $scope.newLibro = {}; // Borramos los datos del formulario
                $scope.libros = data;
                $scope.selected = false;
            })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    // Función que borra un objeto libro conocido su id
    $scope.borrarLibro = function(newLibro) {
        $http.delete('/api/libro/' + $scope.newLibro._id)
        .success(function(data) {
            $scope.newLibro = {};
            $scope.libros = data;
            $scope.selected = false;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectLibro = function(libro) {
        $scope.newLibro = libro;
        $scope.selected = true;
        console.log($scope.newLibro, $scope.selected);
    };
}