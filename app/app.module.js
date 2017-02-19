angular
  .module('movieBase', [
    'ngRoute',
    'ngAnimate',
    'core',
    'movieList',
    'movieDetails',
    'placeholder'
  ])
  // We can define a constant service to hold unchanging data that can be injected into other
  // components, controllers or services in our application.
  .constant('metaData', {
    courseNumber: 'MTM6430',
    courseSection: '300',
    title: 'Assignment 1: Master-Detail View',
    description: 'A simple list/detail example with angular-route and angular-view.',
    author: 'Robert McKenney',
    version: '1.4.0'
  })
  // We'll inject our constant 'metaData' into the rootScope so that is accessible
  // in our index.html
  .run( ($rootScope, metaData) => { $rootScope.metaData = metaData } )
