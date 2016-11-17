var app = angular.module("gramApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: "partials/home.html",
    controller: 'indxController'
  })
  .when('/video',{
    templateUrl: "partials/video.html",
    controller: 'videoCtrl'
  })
  .when('/ejercicio-1',{
    templateUrl: "partials/ejercicio1.html",
    controller: 'ejercicio1Ctrl'
  })
  .when('/ejercicio-2',{
    templateUrl: "partials/ejercicio2.html",
    controller: 'ejercicio2Ctrl'
  })
  .when('/teoria',{
    templateUrl: "partials/teoria.html",
    controller: 'ejercicio2Ctrl'
  })
  .when('/error-404',{
    templateUrl: "partials/error-404.html",
    controller: 'errorController'
  })
  .otherwise({
    redirectTo: '/error-404'
  });
});

app.controller('indxController', function($scope, $http){

});

app.controller('videoCtrl', function($scope, $http){

});

app.controller('ejercicio1Ctrl', function($scope, $http){

});

app.controller('ejercicio2Ctrl', function($scope, $http){

});

app.controller('errorController', function($scope, $http){

});