'use strict';

var React = require('react');
var Router = require('react-router');

var PresentationActions = require('../../actions/presentationActions');
var PresentationStore = require('../../stores/presentationStore');
var UserStore = require('../../stores/userStore');

var SlideList = require('./slidesList.js');
var SlideForm = require('./slideForm.js');
var PresentationHeader = require('./presentationHeader');

var ManagePresentationPage = React.createClass({
	mixins: [
		Router.Navigation
	],

	propTypes: {
		params: React.PropTypes.object
	},

	statics: {
		willTransitionFrom: function(transition, component ) {
			if(component.state.dirty && transition.path === '/' &&! confirm('Ga je weg zonder op te slaan?')) {
				transition.abort();
			}
		}
	},

	componentWillMount: function() {  //before it is rendered so that the render function is not called twice
		var presentationId = this.props.params.id;
		var _currentSlide = Number(this.props.params.slide) || 0;

		if (presentationId) {
			var _presentation = PresentationStore.getPresentationById(presentationId);

			if (_presentation) {
				this.setState({
					presentation: _presentation,
					currentSlide: _currentSlide
				});
			}
		}
	},

	getInitialState: function() {
		var user = UserStore.getUser();
		var presentation = {
			meta: {
				created: new Date(),
				author_id: user.id,
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

	updatePresentation: function(_presentation) {
		this.setState({
			presentation: _presentation,
			dirty: true
		});
	},

	transitionSlide: function(num) {
		this.setState({
			currentSlide: num,
		});

		if(this.state.presentation.meta.id) {
			this.transitionTo('managePresentation', { id: this.props.params.id, slide: num });
		}
	},
	
	onChangeTitle: function(event) {
		var _presentation = this.state.presentation;
		_presentation.meta.title = event.target.value;

		this.updatePresentation(_presentation);
	},

	onChangeSlide: function(event) {
		var _presentation = this.state.presentation; 
		_presentation.slides[this.state.currentSlide][event.target.name] = event.target.value;

		this.updatePresentation(_presentation);
	},

	newSlide: function() {
		var _presentation = this.state.presentation; 
		var num = this.state.currentSlide + 1;

		_presentation.slides.splice(num, 0, {title: '', content: ''});

		this.updatePresentation(_presentation);
		this.transitionSlide(num);
	},

	selectSlide: function(num) {
		this.transitionSlide(num);
	},

	killSlide:function(num) {
		var _presentation = this.state.presentation; 
		_presentation.slides.splice(num,1);

		if(_presentation.slides.length === 0) {
			_presentation.slides.push({title: '', content: ''});
		}

		num = num === 0 ? 0 : num -1;

		this.transitionSlide(num);
		this.updatePresentation(_presentation);
	},

	onSave: function() {
		if(this.state.presentation.meta.id) {
			PresentationActions.update(this.state.presentation);
		} else {
			PresentationActions.create(this.state.presentation);
			this.transitionTo('managePresentation', { id: this.state.presentation.meta.id, 
														slide: this.state.currentSlide });
		}

		this.setState({
			dirty: false
		});
	},

	handleChange: function(evt) {
		debugger;
		this.setState({
			t1: evt.target.value
		});
	},

	onKill: function() {
		if(confirm('Weet je zeker dat je de presentatie wilt verwijderen?')) {
			PresentationActions.kill(this.state.presentation);
			this.transitionTo('overview');
		}
	},

	render: function() {
		var presentationTitle = this.state.presentation.meta.title,
			slide = this.state.presentation.slides[this.state.currentSlide];
		
		return (
			<div>
				<PresentationHeader title={presentationTitle} isDirty={this.state.dirty} onChange={this.onChangeTitle} onSave={this.onSave} onKill={this.onKill} />
				<div className='slide-container'>
					<div className='slides-list-container inline-block'>
						<SlideList 	addNewSlide={this.newSlide}
									killSlide={this.killSlide}
									currentSlide={this.state.currentSlide} 
									onClickSlide={this.selectSlide} 
									slides={this.state.presentation.slides} /> 
					</div>
					<div className='slide-form-container inline-block top2'>
						<SlideForm slide={slide} onChange={this.onChangeSlide} />
					</div>
				</div>	
			</div>
		);
	}
});

module.exports = ManagePresentationPage;