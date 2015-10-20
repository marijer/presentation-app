var React = require('react');

var SlidesList = React.createClass({
	propTypes: {
		slides: React.PropTypes.array.isRequired,
		onClickSlide: React.PropTypes.func.isRequired,
		addNewSlide: React.PropTypes.func.isRequired,
		currentSlide: React.PropTypes.number.isRequired,
		killSlide: React.PropTypes.func.isRequired
	},

	_checkBounds: function(num) {
		if(num < 0) {
			return 0;
		} else if( num > this.props.slides.length -1) {
			return this.props.slides.length -1;
		}

		return num;
	},

	selectSlide: function(num) {
		var slide = this._checkBounds(num);
		this.props.onClickSlide(slide);
	},

	_handleKeyEvent:function(event) {
		event.preventDefault();
		
		switch(event.keyCode) {
		case 8: {  // esc
			this.props.killSlide(this.props.currentSlide);
			break;
		}
		case 38: {  // up
			this.selectSlide(this.props.currentSlide -1);
			break;
		}
		case 40: { // down
			this.selectSlide(this.props.currentSlide + 1);
			break;
		}
		}
	},

	componentWillMount:function() {
		document.addEventListener('keydown', this._handleKeyEvent, false);
	},

	componentWillUnmount: function() {
		document.removeEventListener('keydown', this._handleKeyEvent, false);
	},

	render: function() {
		var slides = '';
		if(this.props.slides) {
			slides = this.props.slides.map(function(slide, num) {
				var className = 'slide-tile';
				if (this.props.currentSlide === num ) {
					className += ' active';
				}
				
				return <li key={num}>
							<div className={className} onClick={this.selectSlide.bind(this, num)}>
					   			<div className='slide-title'>{slide.title}</div>
						   		<div className='slide-number'>{num + 1}</div>
					   		</div>
				   		</li>
			}, this);
		}

		return (
			<div className='slides-wrapper'>
				<button 
					type='button' 
					className='btn btn-new btn-new-slide' 
					onClick={this.props.addNewSlide} >
					Nieuwe slide
				</button>
					
				<ul className='slides-list'>
					{slides}
				</ul>
			</div>
		);
	}
});

module.exports = SlidesList;