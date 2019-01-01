import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container1 from './Containers/container1';
import Container2 from './Containers/container2';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container1/>
          <Container2/>
      </div>
    );
  }
}

export default App;
