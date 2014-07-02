var app = angular.module('tyveApp', ['ui.router'])

// app.config(function ($stateProvider, $urlRouterprovider) {
//   $stateProvider

//     .state('index', {
//         url: '/',
//         templateUrl: 'landing.html',
//         controller: 'mainCtrl'
//     })

//   $urlRouterprovider.otherwise('/')

// })

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider

    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })

    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })

    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })

    .state('state2.list', {
      url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      })
});

app.controller('MainCtrl', function ($scope) {
  $scope.defaultMsg = 'No view injection yet!'
})
