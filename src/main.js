var React = require('react');

var View = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Example now</h1> 
      </div>
    );
  }
});


React.render(<View />, document.getElementById('app'));
