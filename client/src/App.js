import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Compoenents
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

// Containers
import Menu from "./containers/Menu";
import CustomerDashboard from "./containers/CustomerDashboard";
import NewReservation from "./containers/NewReservation";
import Location from "./containers/Location";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

//auth Component
import withAuth from "./containers/withAuth";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/menu" component={Menu} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          {/* protected routes */}
          <Route
            exact
            path="/customerdash"
            component={withAuth(CustomerDashboard)}
          />
          <Route
            exact
            path="/reservations/new"
            component={withAuth(NewReservation)}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
