"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name='app' path='/' handler={require('./js/components/app')}>
		<DefaultRoute handler={require('./js/components/overview/overview')} />
		<NotFoundRoute handler={require('./js/components/notFoundPage')} />
	</Route>	
);

module.exports = routes;