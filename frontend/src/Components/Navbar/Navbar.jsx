import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './Navbar.css';

function Navbar1() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalOpen = () => setShowLoginModal(true);
  const handleLoginModalClose = () => setShowLoginModal(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", formData.username);
    data.append("password", formData.password);

    // API calling goes here...
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
                  as={Link}
                  to='/login'
                  className="nav-btn"
                  // onClick={handleLoginModalOpen}
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
  <Modal.Title className="text-center w-100 text-2xl text-blue-900"><h1 className='text-blue-950 font-bold'>Log In</h1></Modal.Title>
</Modal.Header>

        <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <Nav.Link 
         as={Link}
         to="/admin"
        ></Nav.Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar1;
