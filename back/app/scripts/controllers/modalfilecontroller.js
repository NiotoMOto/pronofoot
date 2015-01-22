'use strict';
/**
 * @ngdoc function
 * @name backApp.controller:ModalfilecontrollerCtrl
 * @description
 * # ModalfilecontrollerCtrl
 * Controller of the backApp
 */
angular.module('backApp').controller('ModalfilecontrollerCtrl', function($scope, $modalInstance, bets) {
	$scope.bets = bets;
    $scope.ok = function() {
        $modalInstance.close('toto');
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});