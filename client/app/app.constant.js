(function(angular, undefined) {
  angular.module("aApp.constants", [])
s
.constant("appConfig", {
	"userRoles": [
		"guest",
		// "user",
		"customer",
		"admin",
		"vendor"
	]
})

;
})(angular);