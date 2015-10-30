'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
	<Route name='app' path='/' handler={require('./js/views/app')}>
		<Route name='login' path='login' handler={require('./js/views/login/login')} />
		<Route name='user' path='user' handler={require('./js/views/login/login')} />
		<DefaultRoute name='overview' handler={require('./js/views/index/index')}  />
		<Route name='addPresentation' path='add' handler={require('./js/views/presentation/managePresentation')}  />
		<Route name='managePresentation' path='presentation/:id/:slide' handler={require('./js/views/presentation/managePresentation')} />
		<NotFoundRoute handler={require('./js/views/notFoundPage')} />
	</Route>	
);

module.exports = routes;