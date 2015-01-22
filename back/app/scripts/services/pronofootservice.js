'use strict';
/**
 * @ngdoc service
 * @name backApp.pronofootService
 * @description
 * # pronofootService
 * Service in the backApp.
 */
angular.module('backApp').factory('pronofootService', function pronofootService($resource) {
    var API_URL = 'http://localhost:3000/api/';
    return {
        getRessource: function(shema) {
            var resource = $resource(API_URL + shema + '/:id/:ctrl', {}, {
                'query': {
                    method: 'GET',
                    isArray: true,
                }
            });
            return resource;
        }
    };
});