﻿(function () {
  'use strict';

  angular
    .module('home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    var vm = this;

    vm.pageTitle = 'Home';
  }
})();
