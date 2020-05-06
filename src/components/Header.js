import React, { Component } from "react";
import Menu from "./Menu";
import "./Header.css";

class Header extends Component {
  state = { isScroll: false };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 20) this.setState({ isScroll: true });
    else this.setState({ isScroll: false });
  };
  render() {
    return (
      <header className={this.state.isScroll ? `header-scroll` : `header`}>
        <Menu />
      </header>
    );
  }
}

export default Header;
