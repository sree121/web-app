var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
   $routeProvider
   
   .when('/',{
     templateUrl:'pages/main.html',
       controller:'maincontroller'
       
   })
    .when('/resume',{
        
       templateUrl:'pages/second.html',
        controller:'secondcontroller'
    
    })
     .when('/contact',{
        
       templateUrl:'pages/third.html',
        controller:'thirdcontroller'
    
    });
    
   }); 
    myApp.controller('maincontroller',function($scope){
        $scope.name="sree";
        
    });
    

myApp.controller('secondcontroller',function($scope){
        $scope.name="raaj";
        
    });

myApp.controller('thirdcontroller',function($scope){
        $scope.name="raaj";
        
    });