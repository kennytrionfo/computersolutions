var app = angular.module("computer",['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/main',{
      templateUrl: 'main.html', 
      controller:'MainCtrl'
    });
}])

app.controller('MainCtrl',[function(){
  console.log('This is the main controller'); 

}]);