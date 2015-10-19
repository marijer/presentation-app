"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var user = {};

var UserStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

// has to be done when the store has updated
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	isLoggedIn: function() {
		return !_.isEmpty(user);
	},

	getUser: function() {
		return user;
	}

});

Dispatcher.register(function (action) {
	switch(action.actionType) {
		case ActionTypes.INITIALIZE: 
			user = action.initialData.user;
			UserStore.emitChange();  
			break;
		case ActionTypes.LOGIN:
			user = action.user;
			UserStore.emitChange(); 
			break;
		case ActionTypes.LOGOUT:
			user = null;
			UserStore.emitChange(); 
			break;
		case ActionTypes.GETUSER:
			user = action.user;
			UserStore.emitChange(); 
			break;
		default: 
			// no operations
	}
});

module.exports = UserStore;