"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');

var Login = React.createClass({
	getInitialState: function() {
    	return { 
    		value: '',
    		isValidated: false
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
		var autoFocus = true;
		var loginContent = <input type="text" name="username" autoComplete="off" autoCorrect="Off" onChange={this.handleChange} value={this.state.value} placeholder="whats your name?" autoFocus={autoFocus} />;

		if (this.state.isValidated) {
			classString += " logged-animation";
			autoFocus = false;
			loginContent= <span>{this.state.value}</span>;
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