import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa'; // Importing icons

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light" className="shadow-sm">
      <Container>
        {/* Left side with D&S brand name and categories */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{ color: "#ff0000", fontWeight: "bold", fontSize: "24px" }} // Red color for "D&S"
        >
          D & S
        </Navbar.Brand>
        <Nav className="ms-4">
          <Nav.Link as={Link} to="/womens" style={{ fontWeight: "bold" }}>Womens</Nav.Link>
          <Nav.Link as={Link} to="/mens" style={{ fontWeight: "bold" }}>Mens</Nav.Link>
          <Nav.Link as={Link} to="/kids" style={{ fontWeight: "bold" }}>Kids</Nav.Link>
          <Nav.Link as={Link} to="/home" style={{ fontWeight: "bold" }}>Home</Nav.Link>
        </Nav>

        {/* Right side with icons */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="d-flex align-items-center">
            <FaHome size={20} className="me-2" /> 
          </Nav.Link>
          <Nav.Link as={Link} to="/search" className="d-flex align-items-center">
            <FaSearch size={20} className="me-2" /> 
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" className="d-flex align-items-center">
            <FaUser size={20} className="me-2" /> 
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="d-flex align-items-center">
            <FaShoppingCart size={20} className="me-2" /> 
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="d-flex align-items-center">
            <FaSignInAlt size={20} className="me-2" /> 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
