"use strict";

var React = require('react');

var Login = React.createClass({
	render: function() {
		return (
			<form>
				<div className="user-login-wrapper">
					<input type="text" name="username" placeholder="whats your name?" autoFocus="true" />
				</div>
			</form>
		);
	}
});

module.exports = Login;