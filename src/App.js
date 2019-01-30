import React, { Component } from 'react';
import './App.css';
import './Questions/Questions'; 
import Questions from './Questions/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Questions>question= How much oxygen is Earth's atmosphere composed of?</Questions>
      </div>
    );
  }
}

export default App;
