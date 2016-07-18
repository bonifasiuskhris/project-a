'use strict';
(function(){

class ResultsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('aApp')
  .component('results', {
    templateUrl: 'app/search/results/results.html',
    controller: ResultsComponent
  });

})();
