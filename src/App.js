import React, { useState, useReducer } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import page404 from "./pages/404";
import Post from "./pages/Post";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserLogin from "./components/UserLogin/UserLogin.component";

import {
  COUNTER_INITIAL_STATE,
  counterReducer,
} from "./components/CounterHook/CounterHook.reducer";

import { UserContext, CounterContext } from "./contexts/context";

function App() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);
  const [userName, setUserName] = useState("");

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <UserContext.Provider value={[userName, setUserName]}>
        <BrowserRouter>
          <UserLogin />
          <Header />
          <Switch>
            <Redirect from="/contact" to="/" />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:id" component={Post} />
            <Route component={page404} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </CounterContext.Provider>
  );
}

export default App;
