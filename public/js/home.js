/** for non-logged-in client side angular */

var home = angular.module('home', ['ui.router'])

home.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider

  .state('homepage', {
    url: '/',
    templateUrl: 'partials/landing.html',
    controller: function ($scope) {
      $scope.title = 'Tyve'
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'partials/login.html',
    controller: function ($scope) {

    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'partials/signup.html',
    controller: function ($scope) {

    }
  })

})