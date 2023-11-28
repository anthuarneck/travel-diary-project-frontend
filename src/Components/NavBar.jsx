import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./UserComponents/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const { user } = useAuth();
  // <nav>
  //   <h1>Travel Diary</h1>
  //   <h3>
  //     <Link to="/destinations">Destinations</Link>
  //   </h3>
  //   <button>
  //     <Link to="/destinations/new">Add a Destination</Link>
  //   </button>
  //   {user.id ? (
  //     <button>
  //       <Link to="/">Logout</Link>
  //     </button>
  //   ) : null}
  // </nav>
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="Brand">Travel Diary</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/destinations">Destinations</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/destinations/new">Add a Destination</Link>
            </Nav.Link>
            {user.id ? (
               <Nav.Link>
               <Link to="/">Sign Out</Link>
             </Nav.Link>
            ) : null}
            {!user.id ? (
               <Nav.Link>
               <Link to="/">Sign In</Link>
             </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
