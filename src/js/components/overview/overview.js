"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');
var PresentationsList = require('./presentationsList');

var Overview = React.createClass({
	getInitialState: function() {

		PresentationActions.getAll();
		
    	return { 
    		presentations: PresentationStore.getAllPresentations()
    	 };
 	},

 	componentWillMount: function() {
		PresentationStore.addChangeListener(this._onChange);
	},
	// cleanup when it is unmounted
	componentWillUnmount: function() {
		PresentationStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({presentations: PresentationStore.getAllPresentations()});
	}, 

	render: function() {
		return (
			<div className='main-offset'>
				<h1>Overview</h1>
				<PresentationsList presentations={this.state.presentations} />
				<div className="top2">
					<Link to="addPresentation" className="btn btn-default">Add Presentation</Link>
				</div>	
			</div>
		);
	}
});

module.exports = Overview;