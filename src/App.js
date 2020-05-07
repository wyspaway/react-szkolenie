import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import page404 from "./pages/404";
import Post from "./pages/Post";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {
  COUNTER_INITIAL_STATE,
  counterReducer,
} from "./components/CounterHook/CounterHook.reducer";

export const CounterContext = React.createContext(1);

function App() {
  const [state, dispatch] = useReducer(counterReducer, COUNTER_INITIAL_STATE);

  return (
    <CounterContext.Provider value={[state, dispatch]}>
      <BrowserRouter>
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
    </CounterContext.Provider>
  );
}

export default App;
