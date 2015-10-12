"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var presentationApi = require('../../api/presentationApi');
var ActionsTypes = require('../constants/actionTypes');

var PresentationActions = {
	get: function(id) {
		var presentation = presentationApi.getPresentation(id);

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_GET,
			presentation: presentation
		});
	},
	
	create: function(_presentation) {
		var presentation = presentationApi.create(_presentation);

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_CREATE,
			presentation: presentation
		});
	},

	getAll: function() {
		var presentations = presentationApi.getAll();

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_GET_ALL,
			presentations: presentations
		});
	}
};

module.exports = PresentationActions;