var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
   $routeProvider.when('/',{
     templateUrl:'pages/main.html',
   })
    .when('/resume',{
      templateUrl:'pages/second.html',
    })
     .when('/contact',{
      templateUrl:'pages/third.html',
    });
}); 
