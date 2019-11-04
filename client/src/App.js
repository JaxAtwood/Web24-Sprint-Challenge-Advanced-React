import React, { Component } from 'react';
import Data from "./components/Data";
import Toggle from "./hooks/Toggle";
import { Candy } from "./components/Styles";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      things: ""
  
    };
  }

  render() {
  return (
    <div className="App">
      <div className="toggleBox">
        <Candy>Cotton Candy Mode</Candy>
        <Toggle />
      </div>

      <div>
        <Data 
            things={this.state.things}
            />
      </div>
    </div>
    );
  }
}
export default App;