"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var UserApi = require('../../api/presentationApi');
var ActionsTypes = require('../constants/actionTypes');

var PresentationActions = {
	get: function(id) {
		var presentation = presentationApi.getPresentation(id);

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_GET,
			user: presentation
		});
	},
	
	create: function() {
		var presentation = presentationApi.create();

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_CREATE,
			user: presentation
		});

	},

	getAll: function() {
		var presentations = presentationApi.getAll();

		Dispatcher.dispatch({
			actionType: ActionsTypes.PRESENTATION_GET_ALL,
			user: presentations
		});
	}
};

module.exports = UserActions;