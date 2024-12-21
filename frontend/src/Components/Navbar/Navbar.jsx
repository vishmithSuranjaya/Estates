import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Navbar.css'

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body" style={{fontWeight:'650'}}>
      <Container>
        <button className="nav-btn">Post an Advertisement</button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Properties</Nav.Link>
          </Nav>
          <Nav>
            <button className='nav-btn'>Log In</button>
            <button className='nav-btn'>Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;