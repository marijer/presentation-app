"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var UserApi = require('../../api/userApi');
var ActionsTypes = require('../constants/actionTypes');

var UserActions = {
	login: function(user) {
		var newUser = UserApi.login(user);

		Dispatcher.dispatch({
			actionType: ActionsTypes.LOGIN,
			user: newUser
		});
	},

	getUser: function() {
		var user = UserApi.getUser();

		Dispatcher.dispatch({
			actionType: ActionsTypes.GET_USER,
			user: user
		});

	}
};

module.exports = UserActions;