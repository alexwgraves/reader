import React, { Component } from 'react';
import Form from './Form.js';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Reader</h1>
        <p>Paste an article link below to read without distractions.</p>
        <Form></Form>
      </div>
    );
  }
}

export default App;
