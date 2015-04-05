(function() {

  'use strict';

  angular.module('basic.detail', [])
    .controller('DetailController', ['$routeParams', DetailController]);

  function DetailController($routeParams) {
    this.name = 'detail'; 
    this.id = $routeParams.id
  }

})();
