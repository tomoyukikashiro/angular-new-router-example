(function() {

  'use strict';
  angular.module('lifecycle', [
    'lifecycle.home',
    'lifecycle.detail',
    'ngNewRouter'
  ]).controller('LifecycleController', ['$router', LifecycleController]);

  function LifecycleController($router) {
    $router.config([
      {path : '/', component: 'home'},
      {path : '/detail/:id', component: 'detail'}
    ]);
  }
})();
