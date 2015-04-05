(function() {

  'use strict';
  angular.module('sibling', [
    'sibling.users',
    'sibling.posts',
    'ngNewRouter'
  ]).controller('SiblingController', ['$router', SiblingController]);

  function SiblingController($router) {
    $router.config([
      {path : '/', redirectTo: '/users/posts'},
      {path : '/users/posts', components: {left: 'users', right: 'posts'}},
      {path : '/posts/users', components: {left: 'posts', right: 'users'}},
    ]);
  }
})();
