'use strict';

var React = require('react/addons');

var {SANS_SERIF, MONO, SERIF, SCRIPT} = require('./eyes.js');

// CSS
require('normalize.css');
require('../styles/main.css');

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
