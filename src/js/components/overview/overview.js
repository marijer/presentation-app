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
		PresentationActions.getAll();
	},
	// cleanup when it is unmounted
	componentWillUnmount: function() {
		PresentationStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({presentations: PresentationStore.getAllPresentations()});
	}, 

	render: function() {
		var presentations = this.state.presentations.map(function(presentation) {
		   return <li key={presentation.meta.name}>{presentation.meta.title} - {presentation.meta.name}</li>
		})
		return (
			<div>
				<h1>Overview</h1>
				{presentations}

				<Link to="addPresentation" className="btn btn-default">Add Presentation</Link>
			</div>
		);
	}
});

module.exports = Overview;