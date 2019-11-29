import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Nav } from "react-bootstrap";
import styles from "../sass/Navbar.module.scss";

const NavBar = () => {
  return (
    // <Container className="ml-1 mr-0">
    <Navbar expand="md" className={styles.navBar}>
      <NavbarBrand>
        <Link className={styles.brand} to="/">
          Bar BQ Tonite
        </Link>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className={[styles.menuBtn, "justify-content-end"]}
      >
        <Nav className={styles.navLinks}>
          <Nav.Link>
            <Link className={styles.navLink} to="/menu">
              Menu
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link className={styles.navLink} to="/about">
              About Us
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.navLink} to="/location">
              Location
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className={styles.navLink} to="/reservation">
              Reservation
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // </Container>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/menu">Menu</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About Us</Link>
    //     </li>
    //     <li>
    //       <Link to="/location">Location</Link>
    //     </li>
    //     <li>
    //       <Link to="/reservation">Reservation</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;
