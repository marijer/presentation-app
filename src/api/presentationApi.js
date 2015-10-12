"use strict";

// var presentations = require('./presentationData').presentations;

var PresentationApi = {
	getAll: function() {
		var presentations = JSON.parse(localStorage.getItem("presentations")); 
		return presentations;
	},

	create: function(presentation) {
		var presentations = JSON.parse(localStorage.getItem("presentations")); 
		if (!presentations) {
			presentations = [];
		}

		presentations.push(presentation);
		localStorage.setItem('presentations', JSON.stringify(presentations));
		
		return presentation;
	},

	get: function(id) {
		// do something here
	}
};

module.exports = PresentationApi;