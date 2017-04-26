(function () {
  'use strict';

  angular
    .module('demo.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/modules/demo/views/demo.view.html',
        controller: 'DemoController',
        controllerAs: 'vm'
      })
  }
})();
