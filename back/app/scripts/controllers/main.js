'use strict';
/**
 * @ngdoc function
 * @name backApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backApp
 */
angular.module('backApp').controller('MainCtrl', function($scope, apiFoot, pronofootService, $q, $modal) {
    var soccerseasonsRessource = apiFoot.getRessource('soccerseasons');
    var betsRessource = pronofootService.getRessource('bets');
    soccerseasonsRessource.query().$promise.then(function(data) {
        $scope.ligues = data;
    });
    
    $scope.open = function() {
        var modalFile = $modal.open({
            templateUrl: 'views/template/modalfile.html',
            controller: 'ModalfilecontrollerCtrl',
            resolve: {
                bets: function() {
                    return $scope.bets;
                }
            }
        });
        modalFile.result.then(function(text) {
            console.log('test', text);
        });
    };

    function getLigueMatchs(ligue) {
        soccerseasonsRessource.query({
            ctrl: 'fixtures',
            id: ligue.id,
            timeFrame: 'n7'
        }).$promise.then(function(data) {
            soccerseasonsRessource.query({
                ctrl: 'teams',
                id: ligue.id
            }).$promise.then(function(teams) {
                $scope.teams = teams;
            });
            $scope.matchs = _.filter(data, function(match) {
                var retour = true;
                _($scope.pronos).forEach(function(prono) {
                    if (prono.matchId === match.id) {
                        retour = false;
                        return false;
                    }
                });
                return retour;
            });
            // $scope.matchs = data;
        });
    }

    function getPronos() {
        betsRessource.query().$promise.then(function(data) {
            $scope.pronos = data;
            if ($scope.ligue.selected) {
                getLigueMatchs($scope.ligue.selected);
            }
        });
    }
    $scope.ligue = {};
    $scope.bets = [];
    $scope.$watch('ligue.selected', function(ligue) {
        if (ligue) {
            getLigueMatchs(ligue);
        }
    });
    $scope.addBet = function(match, pronoTeam) {
        var homeTeam = _.filter($scope.teams, function(team) {
            return team.name === match.homeTeam;
        });
        var awayTeam = _.filter($scope.teams, function(team) {
            return team.name === match.awayTeam;
        });
        $scope.bets.push({
            homeTeam: match.homeTeam,
            awayTeam: match.awayTeam,
            pronoTeam: pronoTeam,
            homeFlag: homeTeam[0].crestUrl,
            awayFlag: awayTeam[0].crestUrl,
            matchId: match.id
        });
    };
    $scope.saveBet = function(match, pronoTeam) {
        var homeTeam = _.filter($scope.teams, function(team) {
            return team.name === match.homeTeam;
        });
        var awayTeam = _.filter($scope.teams, function(team) {
            return team.name === match.awayTeam;
        });
        console.log(awayTeam);
        var bet = {
            homeTeam: match.homeTeam,
            awayTeam: match.awayTeam,
            homeFlag: homeTeam[0].crestUrl,
            awayFlag: awayTeam[0].crestUrl,
            pronoTeam: pronoTeam,
            matchId: match.id
        };
        console.log(bet);
        betsRessource.save(bet).$promise.then(function() {
            getPronos();
        });
    };
    $scope.saveBets = function() {
        var promises = [];
        angular.forEach($scope.bets, function(bet) {
            promises.push(betsRessource.save(bet).$promise);
        });
        $q.all(promises).then(function() {
            getPronos();
            $scope.bets = [];
        });
    };
    getPronos();
});