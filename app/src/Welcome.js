import React, { Component } from 'react';

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

export default Welcome;