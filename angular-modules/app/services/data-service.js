modules.service("DataService", function($http) {

	var data = {};

	var retrieveData = function(model) {
		return data[model] = data[model] ? data[model] : $http.get('app/data/' + model + ".json");
	}

	return {
		getModel: retrieveData
	}


})