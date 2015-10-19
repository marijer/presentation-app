"use strict";
var _ = require('lodash');

function getAllPresentations(){
	return JSON.parse(localStorage.getItem("presentations")); 
}

function savePresentations(presentations) {
	localStorage.setItem('presentations', JSON.stringify(presentations));
}

var PresentationApi = {
	getAll: function(userid) {
		var _presentations = getAllPresentations();
		
		var my_presentations = _.filter(_presentations, function(val, key){
			if(val.meta.author_id === userid){
				return true;
			}
		});

		return my_presentations;
	},

	create: function(presentation) {
		var presentations = getAllPresentations() || [];

		presentation.meta.id = String(Date.now());

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

	kill: function(presentation) {
		var presentations = getAllPresentations(); 

		var updatedArray = presentations.filter(function(item) {
			return item.meta.id !== presentation.meta.id;
		});

		savePresentations(updatedArray);

		return updatedArray;
	}
};

module.exports = PresentationApi;