var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('WidgetsController', function ($scope) {
    $scope.emailId = '';
});
myApp.controller('MyCtrl', function ($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    }
});

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('', {
        templateUrl: 'pages/main.html',
        controller: 'widgetsController'
    })

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'widgetsController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'widgetsController'

    })

    .when('/portfolio', {
        templateUrl: 'pages/portfolio.html',
        controller: 'widgetsController'
    })

    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'widgetsController'
    })

    .when('/thanks', {
        templateUrl: 'pages/thanks.html',
        controller: 'widgetsController'
    })
    

});