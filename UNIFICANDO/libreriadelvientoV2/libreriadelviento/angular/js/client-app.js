angular.module('bookSearchClient',['ngRoute','contollers'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'index',
            controller: IndexController
        }).
        when('/search', {
            templateUrl: 'libros/buscar',
            controller: SearchBookController
        }).
        when('/show/:id', {
            templateUrl: 'libros/buscar',
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