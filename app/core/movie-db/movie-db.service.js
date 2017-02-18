// The logic here is exactly the same as the earlier version when we defined the service in our
// app.js file.  This version is written using the more succinct ES2015 modern javascript notation.
angular
  .module('core.movieDb')
  .service('movieDb', function ($http) {

    getAll = () => ( $http.get('/data/movies.json').then((response) => (response.data)) )

    getById = itemId => (
      getAll().then( (data) => (data.filter( (row) => (row.id == itemId))[0]) )
    )

    getMaxId = () => (
      getAll().then( (data) => (Math.max.apply(Math, data.map( (movie) => (movie.id) ))) )
    )

    return {
      getAll: getAll,
      getById: getById,
      getMaxId: getMaxId
    }
  })
