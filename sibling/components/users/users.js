(function() {

  'use strict';

  angular.module('sibling.users', [])
    .controller('UsersController', UsersController);

  function UsersController() {
    this.name = 'users'; 
  }

})();
