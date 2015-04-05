(function() {

  'use strict';
  angular.module('basic', [
    'basic.home',
    'basic.detail',
    'ngNewRouter'
  ]).controller('BasicController', ['$router', BasicController]);

  function BasicController($router) {
    $router.config([
      {path : '/', component: 'home'},
      {path : '/detail/:id', component: 'detail'}
    ]);
  }
})();
