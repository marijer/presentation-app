'use strict';

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

	contextTypes: {
		router: React.PropTypes.func
	},

	getInitialState: function() {
		var loggedIn = UserStore.getUser() ? true : false,
			userName = loggedIn ? UserStore.getUser().name : '';

		return { 
			loggedIn: loggedIn,
			inputValue: userName,
			isValidated: false
		};
	},

	handleChange: function(event) {
		this.setState({ inputValue: event.target.value });
	},

	validateForm: function(event) {
		event.preventDefault();
		if(this.state.inputValue.length < 3) {
			this.setState({ isValidated: false });
		} else {
			this.setState({ 
				isValidated: true,
				loggedIn: true
			});

			UserActions.login(this.state.inputValue);
			this.transitionTo('overview');
		}
	},

	logout: function() {
		UserActions.logout();
		this.setState({
			inputValue: '',
			isValidated: false,
			loggedIn: false
		})

		this.transitionTo('login');
	},

	render: function() {
		var content;

		if(!this.state.loggedIn) {
			content = <LoginForm inputValue={this.state.inputValue}
						validateForm={this.validateForm}
						handleChange={this.handleChange}
						isValidated={this.state.isValidated} />
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