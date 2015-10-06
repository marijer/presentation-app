"use strict";

var React = require('react');
var Router = require('react-router');
var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');
var UserStore = require('../stores/userStore');

var ManagePresentationPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	statics: {
		willTransitionFrom: function(transition, component ) {
			if(component.state.dirty &&! confirm('Leave without saving?')) {
				transition.abort();
			}
		}
	},

	getInitialState: function() {
		return {
			presentation: '',
			errors: {},
			dirty: false
		};
	},

	setPresentationState: function(event) { // called with every keystroke
		
	},

	presentationFormIsValid: function() {
		
	},

	savePresentation: function(event) {
		event.preventDefault();
		this.transitionTo('overview');
	},

	render: function() {
		return (
			<div>
				<h1>Presentation</h1>
			</div>
		);
	}
});

module.exports = ManagePresentationPage;