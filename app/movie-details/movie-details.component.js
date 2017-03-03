// Notice that because components operate in an isoltated scope, we assign model properties to
// the controller directly via "this" rather than to an imported $scope object.
angular
  .module('movieDetails')
  .component('movieDetails', {
    templateUrl: 'movie-details/movie-details.template.html',
    controller: ['$routeParams', '$location', 'movieDb', 'favourites',
      function MovieListCtrl($routeParams, $location, movieDb, favourites) {
        var self = this  // we are making a referential copy of this (the controller) so that
                         // we can reference it correctly inside our functions. If we just used
                         // "this" inside our functions it would refer to the function
                         // and not our controller.

        self.itemId = $routeParams.itemId

        movieDb.getById(self.itemId)
          // the movieDb.getById() function returns a movie object
          // our .then() function below is implemented with the ES2015 modern javascript notation
          // and is equivilant to writting:
          // .then( function(movie) { self.movie = movie } )
          .then( movie => { self.movie = movie } )
          .catch(function() {
            // if there was an error retrieving the data,
            // redirect to our placeholder
            $location.path('/')
          })
        // the movieDb.getMaxId() function returns the highest id value of all our movie objects
        movieDb.getMaxId().then( id => { self.maxId = id } )

        // We will add a couple of functions to manage the favourite status
        // of each movie. These will use our 'favourites' service.
        self.isFavourite = movieId => (favourites.hasMovie(movieId))

        self.toggleFavourite = movieId => {
          if (self.isFavourite(movieId)) {
            favourites.removeMovie(movieId)
          }
          else {
            favourites.addMovie(movieId)
          }
        }
      }
    ]}
  )
