(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .directive('wudNavbar', wudNavbar);

  /** @ngInject */
  function wudNavbar($state) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        states: '@'
      },
      link: function ($scope) {
        $scope.states = $state.get().filter(function (state) {
          return !state.abstract && !state.hiddenInMenu;
        }).map(function (state) {
          state.friendlyName = capitalizeFirstLetter(state.name.split('.').pop());
          return state;
        });
      }
    };
  }
})();
