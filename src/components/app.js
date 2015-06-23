'use strict';

var React = require('react/addons');

var {SANS_SERIF, MONO, SERIF, SCRIPT} = require('./eyes.js');

// CSS
require('normalize.css');
require('../styles/index.scss');

var App = React.createClass({
  getInitialState() {
    return {
      font: SANS_SERIF,
      hue: 50,
      lightness: 10
    };
  },

  handleFontChange() {
    var nextFont;
    switch (this.state.font) {
      case SANS_SERIF:
        nextFont = MONO;
        break;
      case MONO:
        nextFont = SERIF;
        break;
      case SERIF:
        nextFont = SCRIPT;
        break;
      case SCRIPT:
        nextFont = SANS_SERIF;
        break;
    }
    this.setState({font: nextFont});
  },

  handleMousePosition(event) {
    var height = window.innerHeight;
    var hue = event.pageX;
    var lightness = event.pageY / height * 100;
    this.setState({
      hue: hue,
      lightness: lightness
    });
  },

  componentDidMount() {
    document.onmousemove = this.handleMousePosition;
  },

  render() {
    return (
      <div
        className="wrapper"
        onClick={this.handleFontChange}
        style={{backgroundColor: `hsl(${this.state.hue}, 50%, ${this.state.lightness}%)`}}>
        <pre className="eye" style={{color: `hsl(${this.state.hue}, 50%, ${100 - this.state.lightness}%)`}}>
          {this.state.font.map((line, i) => {
            return <p className="eyeline" key={i}>{line}</p>;
          })}
        </pre>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
