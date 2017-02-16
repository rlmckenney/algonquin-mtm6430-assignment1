angular.module('movieBase', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/placeholder.html',
        controller: 'MovieListCtrl'
      })
      .when('/details/:itemId', {
        templateUrl: 'views/movieCard.html',
        controller: 'MovieDetailsCtrl'
      })
      .otherwise( {redirectTo: '/'} )

    // use the HTML5 History API
    // $locationProvider.html5Mode(true)

  })
  
  .controller('MovieListCtrl', function ($scope, $location, $http) {
    $http
      .get('/data/movies.json')
      .then(function(response) {
        var data = response.data
        $scope.maxId = Math.max.apply(
          Math,
          data.map(function(movie) {
            return movie.id;
          })
        )
        $scope.movieList = data.map(function(movie) {
          return {
            "id": movie.id,
            "title": movie.title,
            "released": movie._year_data,
            "rated": movie.rated,
            "runtime": movie.runtime,
          }
        })
      })
      .catch(function() {
        // set default values in the model ($scope)
        $scope.movieList = []
        $scope.maxId = null
      })

    $scope.isActive = (viewLocation) => (viewLocation === $location.path())
  })

  .controller('MovieDetailsCtrl', function ($scope, $routeParams, $http, $location) {

    $scope.itemId = $routeParams.itemId

    $http.get('/data/movies.json')
      .then(function(response) {
        $scope.movie = response.data.filter(function(row) {
          return row.id == $scope.itemId // Filter out the appropriate one
        })[0]
      })
      .catch(function(e) {
        console.error("Problem retrieving movie data", e)
        // redirect to placeholder
        $location.path('/')
      })
  })
