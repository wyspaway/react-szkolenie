import React, { Component } from "react";

class Console extends Component {
  handleClick = () => {
    console.log("click button");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Klik Console</button>
      </div>
    );
  }
}

export default Console;
