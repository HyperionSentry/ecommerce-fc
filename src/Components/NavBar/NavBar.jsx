import React from 'react'
import  { Link } from 'react-router-dom'
import bookcase from '../../img/bookcase.png';
import { Navbar, Nav,NavDropdown, Container  } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function NavBar() {

  return (
    <div className="App">
      <Navbar bg='dark' variant='dark' expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to ="/">
              <img src={bookcase} alt="BookImage" className='img_Icon'/>
            </Link>
            Tienda de Libros
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="navLink" to="/">
                  Inicio
                </Link>
              </Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="navLink" to="/categoria/Terror">Terror</Link>    
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/categoria/Aventura">Aventura</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navLink" to="/categoria/Didactico">Didactico</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to ="/categoria/Todas">Todas</Link>
               </NavDropdown.Item> 
              </NavDropdown>
            </Nav>
            <Link to ="/Cart">
            <CartWidget />
          </Link>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBar