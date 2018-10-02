import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return (
    <div>
    <h1>Hello, my name is {this.props.name}</h1>
    <h1>My favorite color is {this.props.color}</h1>
    <h1>My favorite hobby is {this.props.hobby}</h1>
    </div>
    );
  }
}


export default App;
export {Welcome};
