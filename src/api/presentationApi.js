"use strict";
var _ = require('lodash');

function getAllPresentations(){
	return JSON.parse(localStorage.getItem("presentations")); 
}

function savePresentations(presentations) {
	localStorage.setItem('presentations', JSON.stringify(presentations));
}

var PresentationApi = {
	getAll: function() {
		var presentations = getAllPresentations();
		return presentations;
	},

	create: function(presentation) {
		var presentations = getAllPresentations(); 
		if (!presentations) {
			presentations = [];
		}
		var id = new Date;
		presentation.meta.id = id.toJSON();

		presentations.push(presentation);
		savePresentations(presentations);
		
		return presentation;
	},

	update: function(presentation) {
		var presentations = getAllPresentations(); 

		var index = _.findIndex(presentations, function (item) {return item.meta.id === presentation.meta.id});
		presentations[index] = presentation;

		savePresentations(presentations);

		return presentation;
	},

	get: function(id) {
		// do something here
	}
};

module.exports = PresentationApi;