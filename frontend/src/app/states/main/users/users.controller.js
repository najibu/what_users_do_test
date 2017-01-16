(function () {
  'use strict';

  angular
    .module('wud.techtest')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController($http) {
    var vm = this;

    vm.refresh = function () {
      $http.get('/api/v1/user').
      success(function (data) {
        vm.users = data.urls;
      });
    };

    vm.deleteUser = function (id) {
      $http({
        method: 'delete',
        url: '/api/v1/user/' + id
      }).then(function () {
        vm.refresh();
      })
    };

    vm.refresh();
  }
})();
