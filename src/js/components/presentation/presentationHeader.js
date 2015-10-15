var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TextInput = require('../common/textInput.js');

var PresentationHeader = React.createClass({
	render: function() {
		return (
			<div className="presentation-meta main-container-no-gutter">

		   		<Link to="overview" className="inline-block right1">
			   		<span>terug</span>
		   		</Link>

				<div className="inline-block right1">
					<input type="button" value="Opslaan" className="btn btn-default" onClick={this.props.onSave} />
				</div>
				
				<div className="inline-block">
					<TextInput 
						name="title"
						placeholder="Title"
						class="presentation-title"
						value={this.props.title}
						onChange={this.props.onChange} />
				</div>
			</div>

		);	
	}
});

module.exports = PresentationHeader;