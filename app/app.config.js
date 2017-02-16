angular.module('movieBase')
  .config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          template: '<placeholder></placeholder>'
        })
        .when('/details/:itemId', {
          template: '<movie-details></movie-details>'
        })
        .otherwise( {redirectTo: '/'} )

      // use the HTML5 History API
      // $locationProvider.html5Mode(true)
      $locationProvider.hashPrefix('!')
    }
  ])
