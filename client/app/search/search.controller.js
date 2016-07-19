'use strict';
(function(){

class SearchController {
  constructor($stateParams) {
    this.message = 'Hello';
    this.meme = 'HAHAHAA';
    this.Building = $stateParams.building;
  }
}

angular.module('aApp')
  .component('search', {
    templateUrl: 'app/search/search.html',
    controller: SearchController,
    controllerAs: 'search'
  });

})();
