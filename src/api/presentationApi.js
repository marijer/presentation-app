"use strict";

var PresentationApi = {
	getAll: function() {
		return;
	},

	create: function() {
		var presentation = JSON.stringify({id: 1, timestamp: new Date()});
		localStorage.setItem('presentation', presentation);
		return presentation;
	},

	get: function(id) {
		// do something here
	}
};

module.exports = PresentationApi;