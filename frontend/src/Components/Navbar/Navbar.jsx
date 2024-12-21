import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar1() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navabar">
      <Container>
        <div>
        <Nav.Link as={Link} to='/post'  className="nav-btn">Post an Advertisement</Nav.Link>
            </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to='/'>Home</Nav.Link>
            <Nav.Link   as={Link} to="/search_filter">Properties</Nav.Link>
          </Nav>
          <Nav>
          <div >
            <Nav.Link as={Link} to='/login' className="nav-btn" style={{color:'#fff',padding:'8px'}}>Log In</Nav.Link>
          </div>

          <div>
            <Nav.Link as={Link} to='/signup' className="nav-btn" style={{color:'#fff',padding:'8px'}}>Sign Up</Nav.Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;