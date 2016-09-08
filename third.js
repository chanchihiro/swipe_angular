
var mySwipe = angular.module("mySwipe",["ngResource","ngTouch","ngAnimate"]);

	mySwipe.controller("MainCtrl",["$scope","$resource",function($scope,$resource){
	
		//jsonをngに格納
		var contents = $resource("user.json");
		$scope.users = contents.query();


		//入れる場所の用意
		$scope.likeusers = [];
		$scope.nopeusers = [];


		//likeの場合
		$scope.like = function($index){
			$scope.likeusers.push({
				firstname : $scope.users[$index].firstname,
				lastname : $scope.users[$index].lastname,
				image : $scope.users[$index].images
			});
			angular.element().find("li").hide();
		};

		//nopeの場合
		$scope.nope = function($index){
			$scope.nopeusers.push({
				firstname : $scope.users[$index].firstname,
				lastname : $scope.users[$index].lastname,
				image : $scope.users[$index].images
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
















