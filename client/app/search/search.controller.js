'use strict';
(function(){

class SearchComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('aApp')
  .component('search', {
    templateUrl: 'app/search/search.html',
    controller: SearchComponent
  });

})();
