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
  .service('movieDb', function ($http) {

    getAll = function() {
      return $http.get('/data/movies.json')
        .then(function(response) {
          return response.data
        })
    }

    // getAll = () => ( $http.get('/data/movies.json').then((response) => (response.data)) )

    // getAll = (function(response) {
    //   return $http.get('/data/movies.json')
    //     .then(function(response) {
    //       return response.data
    //     })
    // })()

    getById = function(itemId) {
      return $http.get('/data/movies.json')
        .then(function(response) {
          return response.data.filter(function(row) {
            return row.id == itemId // Filter out the appropriate one
          })[0]
        })
    }

    // getById = function(itemId) {
    //   return this.getAll()
    //     .then(function(data) {
    //       return data.filter(function(row) {
    //         return row.id == itemId // Filter out the appropriate one
    //       })[0] // because filter always returns a new array and we only want the first object
    //     })
    // }

    return {
      getAll: getAll,
      getById: getById
    }
  })

  .controller('MovieListCtrl', function ($scope, $location, movieDb) {

    movieDb.getAll().then(function(data) {
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
    }).catch(function() {
      // set default values in the model ($scope)
      $scope.movieList = []
      $scope.maxId = null
    })

    $scope.isActive = (viewLocation) => (viewLocation === $location.path())
  })

  .controller('MovieDetailsCtrl', function ($scope, $routeParams, movieDb, $location) {

    $scope.itemId = $routeParams.itemId

    movieDb.getById($scope.itemId)
      .then(function(data) { $scope.movie = data })
      .catch(function() {
        // redirect to placeholder
        $location.path('/')
      })
  })
