"use strict";

var React = require('react');
var Router = require('react-router');
var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');
var UserStore = require('../../stores/userStore');

var SlideForm = require('./slideForm.js');
var PresentationHeader = require('./presentationHeader');

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

	componentWillMount: function() {  //before it is rendered so that the render function is not called twice
		var presentationId = this.props.params.id;

		if (presentationId) {
			var _presentation = PresentationStore.getPresentationById(presentationId);

			if (_presentation) {
				this.setState({
					presentation: _presentation
				});
			}
		}
	},

	getInitialState: function() {
		var user = UserStore.getUser();
		var presentation = {
			meta: {
				created: new Date(),
				author: user.name,
				title: ''
			},
			slides: [{
				title: '',
				content: ''
			}]
		}

		return {
			presentation: presentation,
			errors: {},
			dirty: false,
			currentSlide: 0
		};
	},
	
	savePresentation: function(event) {
		event.preventDefault();
		this.transitionTo('overview');
	},

	onChangeTitle: function(event) {
		var _presentation = this.state.presentation;
		_presentation.meta.title = event.target.value;

		this.setState({
			presentation: _presentation
		})
	},

	onChangeSlide: function(event) {
		var _presentation = this.state.presentation; 
		_presentation.slides[this.state.currentSlide][event.target.name] = event.target.value;

		this.setState({
			presentation: _presentation
		})
	},

	newSlide: function() {
		var _presentation = this.state.presentation; 
		_presentation.slides.push({title: '', content: ''});

		this.setState({
			presentation: _presentation,
			currentSlide: this.state.currentSlide + 1
		});
	},

	onSave: function(event) {
		// here a check if you want to create or update the presentation
		PresentationActions.create(this.state.presentation);
	},

	render: function() {
		var presentationTitle = this.state.presentation.meta.title,
			slide = this.state.presentation.slides[this.state.currentSlide];

		return (
			<div>
				<PresentationHeader title={presentationTitle} onChange={this.onChangeTitle} onSave={this.onSave} />
				<input type="button" value="Nieuwe slide" className="btn btn-default" onClick={this.newSlide} />

				<SlideForm slide={slide} onChange={this.onChangeSlide} />
			</div>
		);
	}
});

module.exports = ManagePresentationPage;