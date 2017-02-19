// Notice that because components operate in an isoltated scope, we assign model properties to
// the controller directly via "this" rather than to an imported $scope object.
angular
  .module('movieList')
  .component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['$location', 'movieDb', 'metaData',
      function MovieListCtrl($location, movieDb, metaData) {
        // We copy the injected metaData constant to a local variable to make it accessible within
        // the component's isolated scope in the template.html file.
        this.metaData = metaData

        var self = this; // We are making a referential copy of this (the controller) so that
                         // we can reference it correctly inside our functions. If we just used
                         // "this" inside our functions it would refer to the function
                         // and not our controller.

        movieDb.getAll().then(function(data) {
          // We could just pass the whole data array to our movieList property. But, for the sake
          // of example we are showing how to use the javascript array.map() function to transform
          // the dataset. In this case we are just extracting selected properties for each object
          // in the array. We could also have applied some programatic chage to the values.
          self.movieList = data.map(function(movie) {
            return {
              "id": movie.id,
              "title": movie.title,
              "released": movie._year_data,
              "rated": movie.rated,
              "runtime": movie.runtime,
              "genres": movie.genres
            }
          })
        })
        // This catch() function will only be called if there was an error returned from the
        // promise resolution in our movieDb.getAll() call. e.g. There was some communication error
        // in reading the datasource.
        .catch(function(e) {
          console.error("Error retrieving data from movieDb", e)
          // set default model properties
          self.movieList = []
          self.maxId = null
        })
        // This function is written in the ES2015 modern javascript standard notation.
        // It is equivilant to writing:
        // self.isActive = function (viewLocation) {
        //   return viewLocation === $location.path()
        // }
        self.isActive = (viewLocation) => (viewLocation === $location.path())
      }
    ]
  })
