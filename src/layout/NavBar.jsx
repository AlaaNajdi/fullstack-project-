import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';
import CartIcon from '../components/cart/CartIcon';

const NavBar = () => {
  const { userLoggedIn, isAdmin, signOutUser } = useContext(UserContext);
  

  const handleSignOut = () => {
    signOutUser();
  }

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href='#home'>E-commerce website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" >Home</Link>
            <Link to="/ProductList">Product List</Link>
            {!userLoggedIn && (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
                
              </>)}
            {userLoggedIn && (
              <>

                {isAdmin && <Link to="/admin/dashboard">Admin Dashboard</Link>}
                {!isAdmin && <Link to="/user/dashboard">User Dashboard</Link>}
                <Link to="/signout" onClick={handleSignOut}>Signout</Link>
                <Link to="/cart">
                  <CartIcon /> {/* استخدم CartIcon مباشرة هنا */}
                </Link>
              </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
