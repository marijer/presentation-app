var React = require('react');

var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;
var UserStore = require('../stores/userStore');
var Header = require('../components/common/header');

var PresentationActions = require('../actions/presentationActions');

var App = React.createClass({
	mixins: [
		Router.Navigation
	],

	componentWillMount: function() {
		UserStore.addChangeListener(this._onChange);
		this._onChange();
		
		if(UserStore.isLoggedIn()){
			var user = UserStore.getUser();

			PresentationActions.getAll(user.id);
		}
    },

    _onChange: function() {
    	if (!UserStore.isLoggedIn()) {
    		this.transitionTo('login');
    	}
    },

	render: function() {
		return (
			<div> 
				<Header />
				<div className='main-container'>
					<RouteHandler /> 
				</div>
			</div>
		);
	}
});

module.exports = App;