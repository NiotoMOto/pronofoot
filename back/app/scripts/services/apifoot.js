'use strict';
/**
 * @ngdoc service
 * @name backApp.apiFoot
 * @description
 * # apiFoot
 * Service in the backApp.
 */
angular.module('backApp').factory('apiFoot', function apiFoot($resource, TokenHandler) {
    var apiKey = 'd6bf3a8ec67f4a58a7bd98e4ea437ee2';
    return {
        getRessource: function(shema) {
            var resource = $resource('http://www.football-data.org/' + shema + '/:id/:ctrl', {
            }, {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers : {'Auth-Token' : apiKey, Accept :'*/*'}
                }
            });
            resource = TokenHandler.wrapActions(resource, ['query', 'update', 'save']);
            return resource;
        }
    };
});