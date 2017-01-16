(function () {
  'use strict';

  angular
    .module('wud.techtest')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($http, $state, $stateParams) {
    var vm = this;

    vm.data = {
      firstname: '',
      lastname: '',
      email: ''
    };

    vm.refresh = function () {
      var userId = $stateParams.userId;

      if (userId) {
        $http.get('/api/v1/user/' + userId).success(function (data) {
          vm.data = data.urls;
        });
      }
    };

    vm.submit = function () {
      var url = '/api/v1/user';
      var method = 'POST';
      if (vm.data.id) {
        url += '/' + vm.data.id;
        method = 'PUT';
      }
      $http({
        method: method,
        url: url,
        data: vm.data
      }, vm.data).then(function () {
        $state.go('main.users');
      });
    };

    vm.refresh();
  }
})();
