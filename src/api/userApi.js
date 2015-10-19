"use strict";
var _ = require('lodash');

// file is server calls

function getAllUsers() {
	return JSON.parse(localStorage.getItem("users")); 
}

function saveUsers(users) {
	localStorage.setItem('users', JSON.stringify(users));
}


var UserApi = {
	login: function(userName) {
		var userInfo;
		var users = getAllUsers() || [];
		var index = _.findIndex(users, function (item) {return item.name === userName});

		if (index >= 0) {
			userInfo = users[index];
		} else {
			var _id = userName.slice(0,2) + '_' + Date.now();
			userInfo = {name: userName, timestamp: new Date(), id: _id};
			users.push(userInfo);
			saveUsers(users);
		}

		localStorage.setItem('currentUser', JSON.stringify(userInfo));

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