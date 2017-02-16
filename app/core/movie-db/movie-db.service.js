angular
  .module('core.movieDb')
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

    getMaxId = function() {
      return this.getAll().then(function(data) {
        return Math.max.apply(Math,data.map(function(movie) {return movie.id}))
      })
    }

    return {
      getAll: getAll,
      getById: getById,
      getMaxId: getMaxId
    }
  })
