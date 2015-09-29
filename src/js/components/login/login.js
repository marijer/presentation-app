"use strict";

var React = require('react');

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
	},

	render: function() {
		var classString = "user-login-wrapper";
		var autoFocus = true;

		if (this.state.isValidated) {
			classString += " logged-animation";
			autoFocus = false;
		}

		return (
			<form onSubmit={this.validateForm}>
				<div className={classString}>
					<input type="text" name="username" onChange={this.handleChange} value={this.state.value} placeholder="whats your name?" autoFocus={autoFocus} />
				</div>
			</form>
		);
	}
});

module.exports = Login;