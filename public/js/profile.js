/** for authenticated client side angular */

var profile = angular.module('profile', ['ui.router'])

// console.log('in here!')

profile.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'partials/profile.main.html',
      controller: function ($scope) {

      }
    })


  $urlRouterProvider.otherwise('/')

})