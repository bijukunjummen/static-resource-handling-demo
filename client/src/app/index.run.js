(function() {
  'use strict';

  angular
    .module('hotelsApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
