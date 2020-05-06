import React, { Component } from "react";

class TextSection extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.text2}</p>
      </div>
    );
  }
}

export default TextSection;
