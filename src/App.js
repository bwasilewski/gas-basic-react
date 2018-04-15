import React, { Component } from 'react';

class App extends Component {
  state = {
    loaded: false
  };
  render() {
    if (!this.state.loaded) return <div>Loading...</div>;
    return (
      <div>
        <h1>GAS Basic React Template</h1>
      </div>
    );
  }
}

export default App;
