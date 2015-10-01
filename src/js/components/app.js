var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Login = require('./login/login');

var App = React.createClass({
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