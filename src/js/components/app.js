var React = require('react');

var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;
var Login = require('./login/login');
var UserStore = require('../stores/userStore');

var App = React.createClass({
	mixins: [
		Router.Navigation
	],

	componentDidMount: function() {
		UserStore.addChangeListener(this._onChange);
		this._onChange();
    },

    _onChange: function() {
    	if (!UserStore.isLoggedIn()){
    		this.transitionTo('/');
    	}
    },

	render: function() {
		return (
			<div> 
				<Login />
				<div className="main-container">
					<RouteHandler /> 
				</div>
			</div>
		);
	}
});

module.exports = App;