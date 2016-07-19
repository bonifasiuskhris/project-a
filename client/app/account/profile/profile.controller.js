	'use strict';

class ProfileController {

	constructor(Auth) {
		this.getCurrentUser = Auth.getCurrentUser;
	}





}

angular.module('aApp').
	controller('ProfileController', ProfileController);
