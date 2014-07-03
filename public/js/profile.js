/** for authenticated client side angular */

var profile = angular.module('profile', ['ui.router'])

profile.config(function($stateProvider, $urlRouterProvider, $state) {

  $urlRouterProvider.otherwise(function ($state) {
    $state.go('main')
  })

  $stateProvider

  .state('main', {
    url: '/profile/:username',
    templateUrl: 'partials/profile.main.html',
    controller: function ($scope) {
      $scope.title = 'Tyve'
      $scope.user = user
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