import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import './Navbar.css';

function Navbar1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Store user details

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navabar">
        <Container>
          <div>
            <Nav.Link as={Link} to="/ad-posting-form" className="nav-btn">
              Post an Advertisement
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/search_filter">Properties</Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn && user ? (
                <>
                  
                  <Nav.Link as={Link} to={`/user-profile/${user.id}`}>
                    <FaUser />
                  </Nav.Link>
                  <Button className="nav-btn" onClick={handleLogout} style={{ color: '#fff', padding: '8px' }}>
                    Logout
                  </Button>
                  
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="nav-btn">
                    Log In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register" className="nav-btn">
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar1;
