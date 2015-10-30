var React = require('react/addons'),
	TestUtils = React.addons.TestUtils;

var Login = require('./login');

  beforeEach(function() {
  	
  });

describe('Login', function() {
	it('render without error', function () {
		var login = TestUtils.renderIntoDocument(
            <Login />
        );

		expect(login).toBeDefined();
	});
});