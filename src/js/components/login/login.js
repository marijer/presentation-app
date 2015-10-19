"use strict";

var React = require('react');
var Router = require('react-router');

var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var LoginForm = require('./loginForm');
var LogoutForm = require('./logoutForm');

var Login = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		var userName = UserStore.getUser() ? UserStore.getUser().name : undefined,
			isValidated = userName ? true : false;

    	return { 
    		inputValue: userName,
    		isValidated: isValidated
    	 };
 	},

	handleChange: function(event) {
		this.setState({ inputValue: event.target.value });
	},

	validateForm: function(event) {
		event.preventDefault();
		this.setState({ isValidated: true });

		UserActions.login(this.state.inputValue);
		this.transitionTo('overview');
	},

	logout: function() {
		UserActions.logout();
		this.setState({
			inputValue: '',
    		isValidated: false
		})
	},

	render: function() {
		var loggedIn = UserStore.getUser() ? true : false;
		var content;

		if(!loggedIn) {
			content = <LoginForm inputValue={this.state.inputValue}
						validateForm={this.validateForm}
						handleChange={this.handleChange}
						isValidated={this.state.isValidated}
						animate={this.state.animate} />
		} else {
			content = <LogoutForm 
							userName={this.state.inputValue} 
							logout={this.logout} />
		}

		return (
			<div className='login-wrapper'>
				{content}
			</div>
		);
	}
});

module.exports = Login;