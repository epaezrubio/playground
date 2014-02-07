var TableCtrl = modules.controller("TableCtrl", function($scope, DataService, PopupService) {

	$scope.rows = [];
	$scope.showPopup = PopupService.showPopup;

	var getModel = function(module) {
		DataService.getModel(module).success(function(data, status, headers, config) {
			$scope.rows = data;
		});
	}

	$scope.$watch('module', function() {getModel($scope.module)});

});