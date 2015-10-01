"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');

var Login = React.createClass({
	getInitialState: function() {
		var userName = UserStore.getUser() ? UserStore.getUser().name : undefined,
			isValidated = userName ? true : false,
			animate = !isValidated ? true : false; 

    	return { 
    		value: userName,
    		isValidated: isValidated,
    		animate: animate
    	 };
 	},

	handleChange: function(event) {
		this.setState({ value: event.target.value });
	},

	validateForm: function(event) {
		event.preventDefault();
		this.setState({ isValidated: true });

		UserActions.login(this.state.value);
	},

	render: function() {
		var classString = "user-login-wrapper";
		var loginContent = <input type="text" name="username" autoComplete="off" autoCorrect="Off" onChange={this.handleChange} value={this.state.value} placeholder="whats your name?" autoFocus="true" />;

		if (this.state.isValidated) {
			if (this.state.animate) {
				classString += " logged-animation";
			} else {
				classString += " logged-in";
			}
			loginContent= <span className="user-label">{this.state.value}</span>;
		}

		return (
			<form onSubmit={this.validateForm}>
				<div className={classString}>
					{loginContent}
				</div>
			</form>
		);
	}
});

module.exports = Login;