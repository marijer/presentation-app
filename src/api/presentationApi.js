"use strict";

var presentations = require('./presentationData').presentations;

var PresentationApi = {
	getAll: function() {
		return presentations;
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