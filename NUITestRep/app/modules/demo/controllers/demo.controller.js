(function () {
  'use strict';

  angular
    .module('demo')
    .controller('DemoController', DemoController);

  DemoController.$inject = ['$scope'];

  function DemoController($scope) {
    var vm = this;

    vm.addPerson = addPerson;
    vm.pageTitle = 'People';
    vm.people = [];
    vm.removePerson = removePerson;

    init();

    function init() {
      // any initialization goes in here.

      getData();
    }

    function addPerson(name) {
      vm.people.push({
        Name: name
      });

      vm.personName = '';
    }

    function removePerson(index) {
      vm.people.splice(index, 1);
    }

    function getData() {
      vm.people.push({
        Name: 'Joe'
      });
    }
  }
})();
