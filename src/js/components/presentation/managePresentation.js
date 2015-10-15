"use strict";

var React = require('react');
var Router = require('react-router');
var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');
var UserStore = require('../../stores/userStore');

var SlideForm = require('./slideForm.js');
var SlidesList = require('./slidesList.js');
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

	selectSlide: function(num) {
		this.setState({
			currentSlide: num
		})
	},

	onSave: function(event) {
		if(this.state.presentation.meta.id) {
			PresentationActions.update(this.state.presentation);
		} else {
			PresentationActions.create(this.state.presentation);
		}
	},

	render: function() {
		var presentationTitle = this.state.presentation.meta.title,
			slide = this.state.presentation.slides[this.state.currentSlide];

		return (
			<div>
				<PresentationHeader title={presentationTitle} onChange={this.onChangeTitle} onSave={this.onSave} />
				<div className="top2 slide-container">
					<div className="slides-list-container inline-block">
						<SlidesList onClick={this.newSlide} currentSlide={this.state.currentSlide} onClickSlide={this.selectSlide} slides={this.state.presentation.slides} />
					</div>
					<div className="slide-form-container inline-block">
						<SlideForm slide={slide} onChange={this.onChangeSlide} />
					</div>
				</div>	
			</div>
		);
	}
});

module.exports = ManagePresentationPage;