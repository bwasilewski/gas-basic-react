import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header title="GAS Basic React" />
        <Main />
      </div>
    );
  }
}

export default App;
