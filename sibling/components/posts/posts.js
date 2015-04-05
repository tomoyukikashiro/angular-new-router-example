(function() {

  'use strict';

  angular.module('sibling.posts', [])
    .controller('PostsController', PostsController);

  function PostsController() {
    this.name = 'posts'; 
  }

})();
