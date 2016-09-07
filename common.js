
var mySwipe = angular.module("mySwipe",["ngResource"]);

	mySwipe.controller("MainCtrl",["$scope","$resource",function($scope,$resource){
		var contents = $resource("user.json");
		$scope.users = contents.query();
	}]);














