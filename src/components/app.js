'use strict';

var React = require('react/addons');

var {SANS_SERIF, MONO, SERIF, SCRIPT} = require('./eyes.js');

// CSS
require('normalize.css');
require('../styles/main.css');

var App = React.createClass({
  getInitialState() {
    return {
      font: MONO
    };
  },

  render() {
    return (
      <div className="wrapper">
        {this.state.font.map((line, i) => {
          return <p key={i}>{line}</p>;
        })}
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
