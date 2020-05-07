import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import page404 from "./pages/404";
// import Post from "./pages/Post";
// import Footer from "./components/Footer/Footer";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
