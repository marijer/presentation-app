var React = require('react');

var PresentationsList = React.createClass({
	render: function() {
		var presentations = this.props.presentations.map(function(presentation) {
		   return <li className="presentation-item" key={presentation.meta.name}>
		   		<span className="title">{presentation.meta.title}</span>
		   		<span className="author">{presentation.meta.author}</span>
		   </li>
		});

		return (
			<ul>
				{presentations}
			</ul>	
		)

	}
})

module.exports = PresentationsList;