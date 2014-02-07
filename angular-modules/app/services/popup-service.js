modules.service("PopupService", function() {

	var url = "", callbacks = [];
	var popup = {
		url: url,
		showPopup: function(partialViewUrl) { 
			url = partialViewUrl; 
			for (var i = 0, ii = callbacks.length; i < ii; i++) {
				callbacks[i](url);
			} 
		},
		registerCallback: function(callback) {
			callbacks.push(callback);
		}
	}

	return popup

})