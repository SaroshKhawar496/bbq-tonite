import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
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
          
          <Nav.Link as={Link} to="/menu">
            <span className={styles.navLink}>Menu</span>
          </Nav.Link>

          <Nav.Link as={Link} to="/location">
            <span className={styles.navLink}>Location</span>
          </Nav.Link>

          <Nav.Link as={Link} to="/reservation">
            <span className={styles.navLink}>Reservation</span>
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
