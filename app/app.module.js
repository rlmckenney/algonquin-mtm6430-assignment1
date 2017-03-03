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

  .run( ($rootScope, metaData) => {
    // We'll inject our constant 'metaData' into the rootScope so that is accessible
    // in our index.html
    $rootScope.metaData = metaData

    // We will test the support for localStorage once at startup and then cache the
    // result for later use by our service component.
    try {
        localStorage.setItem("testKey", "this is the value to be saved")
        localStorage.removeItem("testKey")
        $rootScope.haslocalStorageSupport = true
    }
    catch(error){
        $rootScope.haslocalStorageSupport = false
    }

  } )
