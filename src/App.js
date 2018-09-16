import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar'
import Texttop from './component/texttop'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Texttop/>
      </div>
    );
  }
}

export default App;
