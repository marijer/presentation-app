"use strict";

// file is server calls

var UserApi = {
	login: function (userName) {
		var userInfo = JSON.stringify({name: userName, loggedIn: new Date()});
		localStorage.setItem('user', userInfo);
	}
};

module.exports = UserApi;