(function () {
  'use strict';

  angular
    .module('home.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/home/views/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
  }
})();
