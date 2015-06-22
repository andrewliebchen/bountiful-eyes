'use strict';

describe('BountifulEyesApp', function () {
  var React = require('react/addons');
  var BountifulEyesApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    BountifulEyesApp = require('components/BountifulEyesApp.js');
    component = React.createElement(BountifulEyesApp);
  });

  it('should create a new instance of BountifulEyesApp', function () {
    expect(component).toBeDefined();
  });
});
