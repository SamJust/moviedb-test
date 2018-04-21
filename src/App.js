import React, { Component } from 'react';
import {Body as BodyComponent} from './components/bodyComponent.js';
import {Navigation as NavigationComponent} from './components/navigationComponent.js';

class App extends Component {
  render () {
    return (
      <div>
        <NavigationComponent />
        <BodyComponent />
      </div>
    )
  }
};

export { App };
