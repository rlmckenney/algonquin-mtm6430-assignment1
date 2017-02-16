angular
  .module('core.movieDb')
  .service('movieDb', function ($http) {

    getAll = () => ( $http.get('/data/movies.json').then((response) => (response.data)) )

    getById = function(itemId) {
      return this.getAll().then( (data) => (data.filter( (row) => (row.id == itemId))[0]) )
    }

    getMaxId = function() {
      return this.getAll().then(
        (data) => (Math.max.apply(Math,data.map((movie) => (movie.id))))
      )
    }

    return {
      getAll: getAll,
      getById: getById,
      getMaxId: getMaxId
    }
  })
