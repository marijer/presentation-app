"use strict";

// file is server calls

var UserApi = {
	login: function(userName) {
		var userInfo = JSON.stringify({name: userName, timestamp: new Date()});
		localStorage.setItem('currentUser', userInfo);
		return userInfo;
	},

	logout: function() {
		localStorage.removeItem('currentUser');
	},

	getUser: function() {
		return JSON.parse(localStorage.getItem('currentUser'));
	}
};

module.exports = UserApi;