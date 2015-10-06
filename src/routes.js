"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name='app' >
		<Route name='login' path='/' handler={require('./js/components/app')} >
			<Route name='overview' path='overview' handler={require('./js/components/overview/overview')}  />
			<Route name='addPresentation' path='add' handler={require('./js/components/overview/managePresentation')}  />

		</Route>	
		<NotFoundRoute handler={require('./js/components/notFoundPage')} />
	</Route>	
);

module.exports = routes;