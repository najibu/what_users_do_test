(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'app/states/main/main.html'
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/states/main/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('main.users', {
        url: '/users',
        templateUrl: 'app/states/main/users/users.html',
        controller: 'UsersController',
        controllerAs: 'users'
      })
      .state('main.create', {
        hiddenInMenu: true,
        url: '/create',
        templateUrl: 'app/states/main/users/form.html',
        controller: 'FormController',
        controllerAs: 'userForm'
      })
      .state('main.update', {
        hiddenInMenu: true,
        url: '/update/:userId',
        templateUrl: 'app/states/main/users/form.html',
        controller: 'FormController',
        controllerAs: 'userForm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
