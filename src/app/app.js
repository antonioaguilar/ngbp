/**
 * app.js - Main app
 */

angular.module('ngbp', [

  // html templates
  'app.templates',

  // vendor dependencies
  'ui.router',
  'ngResource',
  'ngCookies',

  // Default page
  'app.home'

])

.config(function myAppConfig ($urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

})

.run(function runApp ($location, $rootScope) {


})

.controller('AppCtrl', function AppCtrl ($scope) {

  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | Website Title';
    }
  });

});
