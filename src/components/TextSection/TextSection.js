import React, { Component } from "react";
import PropTypes from "prop-types";

class TextSection extends Component {
  static propTypes = {
    text: PropTypes.string,
    text2: PropTypes.string,
  };
  render() {
    const { text, text2 } = this.props;
    return (
      <div>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    );
  }
}

export default TextSection;
