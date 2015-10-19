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
		if(this.props.presentations){
			_presentations = this.props.presentations.map(function(presentation) {
				var date = self.getFormattedDate(presentation.meta.created);

			   return <li key={presentation.meta.name} className='presentation-item' >
			   		<Link className='presentation-link' to='managePresentation' params={{id: presentation.meta.id}}>
				   		<span className='title'>{presentation.meta.title}</span>
				   		<span className='date-created'>{date}</span>
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