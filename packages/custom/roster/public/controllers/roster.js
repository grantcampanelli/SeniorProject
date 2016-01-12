'use strict';

/* jshint -W098 */
angular.module('mean.roster').controller('RosterController', ['$scope', 'Global', 'Roster',
  function($scope, Global, Roster) {
    $scope.global = Global;
    $scope.package = {
      name: 'roster'
    };
  }
]);
