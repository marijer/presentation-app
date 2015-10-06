"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');

var Overview = React.createClass({
	getInitialState: function() {
    	return { 
    		presentations: PresentationStore.getAllPresentations()
    	 };
 	},

 	componentWillMount: function() {
		PresentationStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		PresentationStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {

	},

	render: function() {
		return (
			<div>
				<h1>Overview</h1>
				<Link to="addPresentation" className="btn btn-default">Add Presentation</Link>
			</div>
		);
	}
});

module.exports = Overview;