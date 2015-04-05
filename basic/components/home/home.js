(function() {

  'use strict';

  angular.module('basic.home', [])
    .controller('HomeController', HomeController);

  function HomeController() {
    this.name = 'home'; 
  }

})();
