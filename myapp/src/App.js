import React, { Component } from "react";
import HelloWorld from './HelloWorld';

class App extends Component {
  state = {
    tech: "Redux"
  };
  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;