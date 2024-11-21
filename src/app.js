angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home/home.html'
      })
      .when('/orders', {
        templateUrl: 'views/orders/orders.html'
      })
      .when('/menu', {
        templateUrl: 'views/menu/menu.html'
      })
      .when('/menu/:category', {
        templateUrl: 'views/menu-category/menu-category.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
