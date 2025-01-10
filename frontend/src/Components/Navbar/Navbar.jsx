import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar1() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navabar">
        <Container>
          <div>
            <Nav.Link as={Link} to="/post" className="nav-btn">
              Post an Advertisement
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/search_filter">
                Properties
              </Nav.Link>
            </Nav>
            <Nav>
              <div>
                <Nav.Link
                  as="button"
                  className="nav-btn"
                  onClick={handleLoginModalOpen}
                  style={{
                    color: '#fff',
                    padding: '8px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Log In
                </Nav.Link>
              </div>
              <div>
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="nav-btn"
                  style={{ color: '#fff', padding: '8px' }}
                >
                  Sign Up
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose} centered>
      <Modal.Header closeButton className="d-flex justify-content-center">
  <Modal.Title className="text-center w-100">Log In</Modal.Title>
</Modal.Header>

        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Log In
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar1;
