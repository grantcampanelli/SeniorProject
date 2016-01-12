'use strict';

angular.module('mean.roster').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('roster example page', {
      url: '/roster/example',
      templateUrl: 'roster/views/index.html'
    });
  }
]);
