angular
  .module('movieList')
  .component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['$location', 'movieDb',
      function MovieListCtrl($location, movieDb) {
        var self = this;
        movieDb.getAll().then(function(data) {
          self.movieList = data.map(function(movie) {
            return {
              "id": movie.id,
              "title": movie.title,
              "released": movie._year_data,
              "rated": movie.rated,
              "runtime": movie.runtime,
            }
          })
        }).catch(function(e) {
          console.error("Error retrieving data from movieDb", e)
          // set default values in the model ($scope)
          self.movieList = []
          self.maxId = null
        })
        self.isActive = (viewLocation) => (viewLocation === $location.path())
      }
    ]
  })
