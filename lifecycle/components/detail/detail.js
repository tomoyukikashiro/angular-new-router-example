(function() {

  'use strict';

  angular.module('lifecycle.detail', [])
    .controller('DetailController', ['$routeParams', DetailController]);

  function DetailController($routeParams) {
    this.name = 'detail'; 
    this.id = $routeParams.id
  }

  DetailController.prototype.canDeactivate = function() {console.log('Detail : canDeactivate'); return true;};
  DetailController.prototype.deactivate = function() {console.log('Detail : deactivate');};
  DetailController.prototype.canActivate = function() {console.log('Detail : canActivate'); return false;};
  DetailController.prototype.activate = function() {console.log('Detail : activate');};

})();
