"use strict";

// file is server calls

var UserApi = {
	login: function(userName) {
		var userInfo = JSON.stringify({name: userName, timestamp: new Date()});
		localStorage.setItem('user', userInfo);
	},

	getUser: function() {
		return JSON.parse(localStorage.getItem('user'));
	}
};

module.exports = UserApi;