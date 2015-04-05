(function() {

  'use strict';

  angular.module('lifecycle.home', [])
    .controller('HomeController', HomeController);

  function HomeController() {
    this.name = 'home'; 
  }

  HomeController.prototype.canDeactivate = function() {console.log('Home : canDeactivate'); return true;};
  HomeController.prototype.deactivate = function() {console.log('Home : deactivate');};
  HomeController.prototype.canActivate = function() {console.log('Home : canActivate'); return true;};
  HomeController.prototype.activate = function() {console.log('Home : activate');};


})();
