var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PresentationsList = React.createClass({
	propTypes: {
		presentations: React.PropTypes.array.isRequired
	},

	render: function() {
		var _presentations = '';
		if(this.props.presentations){
			_presentations = this.props.presentations.map(function(presentation) {
			   return <li key={presentation.meta.name} className='presentation-item' >
			   		<Link className='presentation-link' to='managePresentation' params={{id: presentation.meta.id}}>
				   		<span className='title'>{presentation.meta.title}</span>
				   		<span className='author'>{presentation.meta.author}</span>
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