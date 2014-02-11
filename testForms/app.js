var main = angular.module("main", []);

main.controller("FormCtrl", function($scope, $http) {
	$scope.formData = {};
	$scope.action = $scope.$watch("action")
	$scope.submit = function() {
		$http({
	        method: 'POST',
	        url: $scope.action,
	        data: $scope.formData,
	        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
	    }).success(function() {
	    	console.log("Data was sent");
	    });
	}
});