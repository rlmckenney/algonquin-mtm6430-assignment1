angular
  .module('movieDetails')
  .component('movieDetails', {
    templateUrl: 'movie-details/movie-details.template.html',
    controller: ['$routeParams', '$location', 'movieDb',
      function MovieListCtrl($routeParams, $location, movieDb) {
        var self = this
        self.itemId = $routeParams.itemId

        movieDb.getById(self.itemId)
          .then(function(data) {
            self.movie = data
          })
          .catch(function() {
            // if there was an error retrieving the data,
            // redirect to our placeholder
            $location.path('/')
          })

        movieDb.getMaxId()
          .then(function(data) {
            self.maxId = data
          })
      }
    ]}
  )
