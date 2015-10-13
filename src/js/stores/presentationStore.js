"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _presentations = [];

var presentationStore = assign({}, EventEmitter.prototype, {
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

	getAllPresentations: function () {
		return _presentations;
	},

	getPresentationById: function (id) {
		return _.find(_presentations, function(val, key){
			if(val.meta.created === id){
				return true;
			}
		});
	}
});

Dispatcher.register(function (action) {
	switch(action.actionType) {
		case ActionTypes.PRESENTATION_GET: 
			presentation = action.presentation;
			presentationStore.emitChange();  
			break;
		case ActionTypes.PRESENTATION_CREATE:
			_presentations.push(action.presentation);
			presentationStore.emitChange(); 
			break;
		case ActionTypes.PRESENTATION_GET_ALL:
			_presentations = action.presentations;
			presentationStore.emitChange(); 
			break;
		default: 
			// no operations
	}
});

module.exports = presentationStore;