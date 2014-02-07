modules.controller("PopupCtrl", function($scope, DataService, PopupService) {
	var showPopup = function(partial) {
		$scope.partialView = partial;
		$("#myModal").modal();
	}

	PopupService.registerCallback(showPopup);
})