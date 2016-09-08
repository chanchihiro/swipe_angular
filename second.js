
var mySwipe = angular.module("mySwipe",["ngResource","ngTouch","ngAnimate"]);

	mySwipe.controller("MainCtrl",["$scope","$resource",function($scope,$resource){
aaa

		//jsonをngに格納
		var contents = $resource("user.json");
		$scope.users = contents.query();

		//ランダムに表示
		$scope.random = function(){
			return 0.5 - Math.random();
		};


		//入れる場所の用意
		$scope.likeusers = [];
		$scope.nopeusers = [];


		//likeの場合
		$scope.like = function(){
			$scope.likeusers.push({
				firstname : $scope.users.firstname,
				lastname : $scope.users[0].lastname,
				image : $scope.users[0].images
			});
		};

		//nopeの場合
		$scope.nope = function(){
			$scope.nopeusers.push({
				firstname : $scope.users[0].firstname,
				lastname : $scope.users[0].lastname,
				image : $scope.users[0].images
			});
		};
	}]);


	mySwipe.directive("login",function(){
		return {
			restrict : "A",
			link : function(scope,element,attrs){
				element.bind("click",function(){
					element.parent().addClass("kieru");
				});
				element.bind("click",function(){
					scope.$apply(attrs.login);
				});
			}
		};
	});
















