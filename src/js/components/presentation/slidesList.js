var React = require('react');

var SlidesList = React.createClass({
	propTypes: {
		slides: React.PropTypes.array.isRequired,
		onClickSlide: React.PropTypes.func.isRequired,
		addNewSlide: React.PropTypes.func.isRequired,
		currentSlide: React.PropTypes.number.isRequired,
		killSlide: React.PropTypes.func.isRequired
	},

	clickSlide: function(num) {
		this.props.onClickSlide(num);
	},

	killSlide: function(num) {
		this.props.killSlide(num);
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
							<div className={className} onClick={this.clickSlide.bind(this, num)}>
					   			<div className='slide-title'>{slide.title}</div>
						   		<div className='slide-number'>{num + 1}</div>
					   		</div>
					   		<a onClick={this.killSlide.bind(this, num)}>x</a>
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