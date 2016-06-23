angular.module('bookSearchClient',['ngRoute','contollers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'index',
            controller: IndexController
        }).
        when('/search', {
            templateUrl: 'books/search',
            controller: SearchBookController
        }).
        when('/show/:id', {
            templateUrl: 'books/search',
            controller: ShowBookController
        }).
        when('/save', {
            templateUrl: 'books/search',
            controller: SaveBookController
        }).
        otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
}])


angular.module('MainApp',['','contollers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/libros/catalogo', {
            templateUrl: 'index',
            controller: LibroController
        }).
        otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
}])