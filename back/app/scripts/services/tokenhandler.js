'use strict';

/**
 * @ngdoc service
 * @name backApp.TokenHandler
 * @description
 * # TokenHandler
 * Service in the backApp.
 */
angular.module('backApp')
  .factory('TokenHandler', function() {
  var tokenHandler = {};
  var token = '6bf3a8ec67f4a58a7bd98e4ea437ee2';
 
  tokenHandler.set = function( newToken ) {
    token = newToken;
  };
 
  tokenHandler.get = function() {
    return token;
  };
 
  // wrap given actions of a resource to send auth token with every
  // request
  tokenHandler.wrapActions = function( resource, actions ) {
    // copy original resource
    var wrappedResource = resource;
    for (var i=0; i < actions.length; i++) {
      tokenWrapper( wrappedResource, actions[i] );
    }
    // return modified copy of resource
    return wrappedResource;
  };
 
  // wraps resource action to send request with auth token
  var tokenWrapper = function( resource, action ) {
    // copy original action
    resource['_' + action]  = resource[action];
    // create new action wrapping the original and sending token
    resource[action] = function( data, success, error){
      return resource['_' + action](
        angular.extend({}, data || {}, {'auth-token': tokenHandler.get()}),
        success,
        error
      );
    };
  };
 
  return tokenHandler;
});
