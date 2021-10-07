import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles/app.scss";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";

function App() {
  return (
    <div id="App">
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Cv" component={Cv} />
        <Route path="/MyWork" component={MyWork} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
