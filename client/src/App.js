import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Compoenents
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

// Containers
import Menu from "./containers/Menu";
import CustomerDashboard from "./containers/CustomerDashboard";
import NewReservation from "./containers/NewReservation";
import Location from "./containers/Location";
import SignUp from "./containers/SignUp";

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
          {/* protected routes */}
          <Route path="/dashboard" component={CustomerDashboard} />
          <Route path="/reservations/new" component={NewReservation} />

          <Route path="/signup" component={SignUp} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
