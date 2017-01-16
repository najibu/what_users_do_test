(function() {
  'use strict';

  angular
    .module('wud.techtest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
