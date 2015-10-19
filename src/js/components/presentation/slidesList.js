var React = require('react');

var SlidesList = React.createClass({
	propTypes: {
		slides: React.PropTypes.array.isRequired,
		onClickSlide: React.PropTypes.func.isRequired,
		onClick: React.PropTypes.func.isRequired,
		currentSlide: React.PropTypes.number.isRequired
	},

	handleClick: function(num) {
		this.props.onClickSlide(num);
	},

	render: function() {
		var slides = '';
		if(this.props.slides){
		
			slides = this.props.slides.map(function(slide, num) {
				var className = 'slide-tile';
				if (this.props.currentSlide === num){
					className += ' active';
				}
			   return <li key={num} className={className} onClick={this.handleClick.bind(this, num)}>
			   			<div className='slide-title'>{slide.title}</div>
				   		<div className='slide-number'>{num}</div>
			   		</li>
			}, this);
		}

		return (
			<div className='slides-wrapper'>
				<input type='button' value='Nieuwe slide' className='btn-new-slide' onClick={this.props.onClick} />
				<ul className='slides-list'>
					{slides}
				</ul>
			</div>
		);
	}
});

module.exports = SlidesList;