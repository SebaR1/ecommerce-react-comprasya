import React from 'react';
import CartWidget from './CartWidget';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Navbar as CustomNavbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import { Link } from "react-router-dom";


import "../stylesComponents/Navbar.css";

function Navbar() {
  return (
    <CustomNavbar expand="lg" className="bg-color-navbar px-lg-5 px-md-3">
      <Container fluid>
        <Nav.Link as={Link} to="/">
          <Logo/>
        </Nav.Link>
        <CustomNavbar.Toggle aria-controls="navbarScroll" />
        <CustomNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0 d-flex 
            justify-content-lg-center align-items-lg-center w-100
            ms-lg-0 ms-2"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
            <NavDropdown title="Categorias">
              <NavDropdown.Item as={Link} to="/catalogo/category/Remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/category/Buzos">Buzos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/category/Camperas">Camperas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/catalogo/category/Pantalones">Pantalones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/carrito"
              className='d-flex align-items-center' style={{minHeight: '20px'}}>
              <CartWidget
              />
            </Nav.Link>
          </Nav>
          <Form className="d-flex flex-row ms-lg-0 ms-2"
            style={{ width: 'auto' }}
          >  
             <Form.Control
               type="text"
               placeholder="Buscar productos"
               className="me-2 bg-color-form-navbar form-focus-navbar"
               aria-label="Search"
               style={{ minWidth: '220px' }}
             />
               <Button 
                 variant="outline-dark"
                 className="bg-color-form-navbar button-navbar">
                 Buscar
               </Button>
          </Form>
        </CustomNavbar.Collapse>
      </Container>
    </CustomNavbar>
  );
}

export default Navbar;