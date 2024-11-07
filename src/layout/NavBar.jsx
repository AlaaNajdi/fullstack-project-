import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';

const NavBar = () => {
  const { userLoggedIn } = useContext(UserContext);
  console.log("navbar: ", userLoggedIn);
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href='#home'>E-commerce website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/" >Home</Link>
            {!userLoggedIn && (
              <>
            <Link to="/signup">signup</Link>
            <Link to="/signin">signin</Link>
            </>)}
            {userLoggedIn && (
              <>
            <Link to="/signout">signout</Link>
            </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
