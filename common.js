
var mySwipe = angular.module("mySwipe",["ngResource"]);

	mySwipe.controller("MainCtrl",["$scope","$resource",function($scope,$resource){

		//jsonをngに格納
		var contents = $resource("user.json");
		$scope.users = contents.query();

		//ランダムに表示
		$scope.random = function(){
			return 0.5 - Math.random();
		};

		var rd = $scope.random;



		//入れる場所の用意
		$scope.likeusers = [];
		$scope.nopeusers = [];


		//likeの場合
		$scope.like = function(){
			$scope.likeusers.push({
				firstname : $scope.users[0].firstname,
				lastname : $scope.users[0].lastname,
				image : $scope.users[0].images,
			});
		};

		//nopeの場合
		$scope.nope = function(){
			$scope.nopeusers.push({
				firstname : $scope.users[0].firstname,
				lastname : $scope.users[0].lastname,
				image : $scope.users[0].images,
			});
		};
	}]);
















