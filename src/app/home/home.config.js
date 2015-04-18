/**
 * This is the default 'home' module
 */

angular.module('app.home', [
  'ngResource',
  'ngCookies',
  'ui.router'
])

.config(function config($stateProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home/partials/home.tpl.html',
    data: {
      pageTitle: 'Home Page'
    }
  });

});
