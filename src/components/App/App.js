import React, { Component } from 'react';
import Intro from '../Intro/Intro.js';
import Series from '../../containers/Series/index.js'
import './App.css';
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My test react app</h1>
        </header>
        <Intro message="Here you can see your test text"/>
        <Series />
      </div>
    );
  }
}

export default App;
