import React from 'react'
import  { NavLink } from 'react-router-dom'
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
            <NavLink to ="/">
              <img src={bookcase} alt="BookImage" className='img_Icon'/>
            </NavLink>
            Tienda de Libros
          </Navbar.Brand>
          <NavLink to ="CartWidget">
            <CartWidget />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Inicio">Inicio</Nav.Link>
              <Nav.Link href="#Tienda">Tienda</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Ciencia Ficcion">Ciencia Ficción</NavDropdown.Item>
                <NavDropdown.Item href="#Terror">Terror</NavDropdown.Item>
                <NavDropdown.Item href="#Terror">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#Terror">Didactico</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavLink to ="/">
                  <NavDropdown.Item href="#Todas">Todas</NavDropdown.Item>
               </NavLink> 
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBar