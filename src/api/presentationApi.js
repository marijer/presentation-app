"use strict";

var presentations = require('./presentationData').presentations;

var PresentationApi = {
	getAll: function() {
		return presentations;
	},

	create: function(presentation) {
		var presentation = JSON.stringify(presentation);
		localStorage.setItem('presentation', presentation);
		
		return presentation;
	},

	get: function(id) {
		// do something here
	}
};

module.exports = PresentationApi;