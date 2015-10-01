"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');

var LoginForm = require('./loginForm');

var Login = React.createClass({
	getInitialState: function() {
		var userName = UserStore.getUser() ? UserStore.getUser().name : undefined,
			isValidated = userName ? true : false,
			animate = !isValidated ? true : false; 

    	return { 
    		inputValue: userName,
    		isValidated: isValidated,
    		animate: animate
    	 };
 	},

	handleChange: function(event) {
		this.setState({ inputValue: event.target.value });
	},

	validateForm: function(event) {
		event.preventDefault();
		this.setState({ isValidated: true });

		UserActions.login(this.state.inputValue);
	},

	render: function() {
		return (
			<LoginForm inputValue={this.state.inputValue}
						validateForm={this.validateForm}
						handleChange={this.handleChange}
						isValidated={this.state.isValidated}
						animate={this.state.animate} />
		);
	}
});

module.exports = Login;