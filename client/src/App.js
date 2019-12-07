import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/Reservation";

import Location from "./containers/Location";
import Menu from "./containers/Menu";
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/location" component={Location} />
          <Route path="/reservation" component={Reservation} />
          {/* <Route path="/register" component={Register} /> */}
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
