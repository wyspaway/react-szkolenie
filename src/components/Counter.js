import React, { Component } from "react";
import Button from "./Button";

class Counter extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    console.log("did update");
  }

  incrementCounter = () => this.setState({ count: this.state.count + 1 });
  decrementCounter = () => this.setState({ count: this.state.count - 1 });
  resetCounter = () => this.setState({ count: 0 });

  render() {
    console.log("render");
    const { count } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
        <Button handleClick={this.incrementCounter} text="+" />
        <Button handleClick={this.decrementCounter} text="-" />
        <Button handleClick={this.resetCounter} text="RESET" />
      </div>
    );
  }
}

export default Counter;
