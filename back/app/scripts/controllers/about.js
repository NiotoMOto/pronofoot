'use strict';

/**
 * @ngdoc function
 * @name backApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the backApp
 */
angular.module('backApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
