var React = require('react');

var SlidesList = React.createClass({

	handleClick: function(num) {
		this.props.onClickSlide(num);
	},

	render: function() {
		var slides = '';
		if(this.props.slides){
			slides = this.props.slides.map(function(slide, num) {
				var className = 'slide-item';
				if (this.props.currentSlide === num){
					className += ' active';
				}

			   return <li key={num} className={className} onClick={this.handleClick.bind(this, num)}>
				   		<span className="slide-number">{num}</span>
			   		</li>
			}, this);
		}

		return (
			<div className="slides-wrapper">
				<input type="button" value="Nieuwe slide" className="btn btn-default" onClick={this.props.onClick} />
				<ul className="slides-list">
					{slides}
				</ul>
			</div>
		);
	}
});

module.exports = SlidesList;