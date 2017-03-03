// We will store our favourites as an array of movie IDs
// e.g. 'favouriteMovies':[1,2,3,7] and then we will mirror that array to
// localStorage for client-side data persistance. Our favourites should be
// remembered when we close and then reopen the browser.
class Favourites {

  constructor ($rootScope) {
    // remember the $rootScope.haslocalStorageSupport property is being set
    // once in the ap.module.js file's .run() function.
    this.hasLocalStorage = $rootScope.haslocalStorageSupport
    this.movies = []

    // If localStorage is available, we will try to load previously saved
    // favourites when we initialize our service. If it returns null,
    // we will set our list to an empty array.
    if (this.hasLocalStorage) {
      const movies = JSON.parse(localStorage.getItem('favouriteMovies'))
      this.movies = movies || []
    }
  }

  // This is a utility function that will be called from any other state
  // changing opperation.  e.g. addMovie or removeMovie
  updateLocalStorage() {
    if (this.hasLocalStorage) {
      localStorage.setItem('favouriteMovies', JSON.stringify(this.movies))
    }
  }

  hasMovie(movieId) { return this.movies.includes(movieId) }

  // we check to see if this movie is already in our favourites list
  // because we only want it to appear once.
  addMovie(movieId) {
    if (!this.hasMovie(movieId)) {
      this.movies.push(movieId)
      this.updateLocalStorage()
    }
  }

  // To remove a movie from our list, we will use the array.filter() function
  // which returns a new array with all the elements of the source array
  // that meet the conditions if the function parameter.
  // Remember, we are using ES2015 coding here. The filter line could have
  // been written more verbosely as:
  // this.movies = this.movies.filter(function(value) {return value !== movieId})
  removeMovie(movieId) {
    this.movies = this.movies.filter(value => (value !== movieId))
    this.updateLocalStorage()
  }

  // to clear the list we'll just set it to an empty array
  removeAllMovies() {
    this.movies = []
    this.updateLocalStorage()
  }

}

// Now we'll let angular know about our service class
angular
  .module('core.favourites')
  .service('favourites', Favourites)
