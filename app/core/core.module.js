// This module is used easily make multiple common services like movieDb accessible
// to be injected throughout the application where needed
angular
  .module('core', [ 'core.movieDb', 'core.favourites' ])
