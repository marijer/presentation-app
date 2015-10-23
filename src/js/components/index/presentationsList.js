var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PresentationsList = React.createClass({
	propTypes: {
		presentations: React.PropTypes.array.isRequired
	},

	getFormattedDate: function(date) {
		var d = new Date(date);

		return d.getHours() + ':' + d.getMinutes();
	},

	render: function() {
		var self = this;
		var _presentations = '';
		if(this.props.presentations) {
			_presentations = this.props.presentations.map(function(presentation) {
				var date = self.getFormattedDate(presentation.meta.created);

				return <li key={presentation.meta.name} className='presentation-item' >
					<Link className='presentation-content' to='managePresentation' params={{id: presentation.meta.id, slide: 0}}>
				   		<div className='presentation-preview'>
					   		<span className='presentation-slide-title'>{presentation.slides[0].title}</span>
				   		</div>
				   		<div className='presentation-meta'>
				   			<div className='date-created fl-right'>{date}</div>
				   			<div className='presentation-title fl-left'>{presentation.meta.title}</div>
					   	</div>	
				   	</Link>	
			   </li>
			});
		}

		return (
			<ul className='presentations-list'>
				{_presentations}
			</ul>	
		)
	}
})

module.exports = PresentationsList;