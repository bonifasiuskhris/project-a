'use strict';
(function(){

class SearchController {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('aApp')
  .component('search', {
    templateUrl: 'app/search/search.html',
    controller: SearchController
  });

})();
