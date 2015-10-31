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
			userName: userName,
			isValidated: false
		};
	},

	handleChange: function(event) {
		this.setState({ userName: event.target.value });
	},

	validateForm: function(event) {
		event.preventDefault();
		if(this.state.userName.length < 3) {
			this.setState({ isValidated: false });
		} else {
			this.setState({ 
				isValidated: true,
				loggedIn: true
			});

			UserActions.login(this.state.userName);
			this.transitionTo('overview');
		}
	},

	logout: function() {
		UserActions.logout();
		this.setState({
			userName: '',
			isValidated: false,
			loggedIn: false
		})

		this.transitionTo('login');
	},

	render: function() {
		var content;

		if(!this.state.loggedIn) {
			content = <LoginForm userName={this.state.userName}
						validateForm={this.validateForm}
						handleChange={this.handleChange}
						isValidated={this.state.isValidated} />
		} else {
			content = <LogoutForm 
							userName={this.state.userName} 
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