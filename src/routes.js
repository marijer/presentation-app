"use strict";

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name='app' path='/' handler={require('./js/components/app')}>
		<Route name='login' path='login' handler={require('./js/components/login/login')} />
		<Route name='user' path='user' handler={require('./js/components/login/login')} />
		<DefaultRoute name='overview' handler={require('./js/components/overview/overview')}  />
		<Route name='addPresentation' path='add' handler={require('./js/components/presentation/managePresentation')}  />
		<Route name='managePresentation' path='presentation/:id' handler={require('./js/components/presentation/managePresentation')} />
		<NotFoundRoute handler={require('./js/components/notFoundPage')} />
	</Route>	
);

module.exports = routes;