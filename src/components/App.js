import React from "react";
import '../styles/App.css';

import {Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";

function App() {
  return (
    <React.Fragment>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/products">
            <Products />
        </Route>
    </React.Fragment>
  );
}

export default App;
