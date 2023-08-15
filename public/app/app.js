'use strict';
var app = angular.module('Sistema', ['ngRoute'
    , 'ngAnimate'
    , 'ngSanitize'
    , 'ngResource'
    , 'mgcrea.ngStrap'
    , 'ui.bootstrap'
    , "pascalprecht.translate"
]);
///#####################################################################################################
app.config(function ($controllerProvider) {
    app.controller = $controllerProvider.register;
});
///#####################################################################################################
app.run(function ($rootScope, $route, $http, $routeParams) {

});
///#####################################################################################################
var date = new Date().getTime().toString();
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', { templateUrl: 'app/views/dashboard.html?t=' + date, controller: 'AppController' })
        .otherwise({ templateUrl: 'app/views/Sistema/Erro_404.html' });
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});