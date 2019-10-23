import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';

import ShapeApp from './component/ShapeApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ShapeApp />
      </div>
    );
  }
}

export default App;

