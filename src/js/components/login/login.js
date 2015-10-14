"use strict";

var React = require('react');
var Router = require('react-router');

var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var LoginForm = require('./loginForm');

var Login = React.createClass({
	mixins: [
		Router.Navigation
	],

	componentDidMount: function() {
		UserStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
    	if (!UserStore.isLoggedIn()) {
    		this.setState({
				isValidated: false
			});
    	}
    },

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