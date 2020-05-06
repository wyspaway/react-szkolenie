import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  //   static propTypes = { brand: PropTypes.bool };
  //   static defaultProps = { brand: false };

  //   render() {
  // const renderClass = this.props.brand
  //   ? "navigation-link navigation-brand"
  //   : "navigation-link";

  // const renderActiveClass = this.props.brand ? "" : renderClass + " active";

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <a href="/contact">Contact href</a>
    </nav>
    //   <li className="grid-cell">
    //     {this.props.to ? (
    //       <Link
    //         {...this.props}
    //         className={renderClass}
    //         activeClassName={renderActiveClass}
    //       />
    //     ) : (
    //       <a {...this.props} className="navigation-link" />
    //     )}
    //   </li>
  );
  //   }
}

export default Menu;
