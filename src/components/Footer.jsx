import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import '../stylesComponents/Footer.css';

function Footer() {
  return (
    <Container fluid className="bg-color-footer text-white text-center p-3">
        <Row>
            <Col>
                <div>
                    <h5 className='text-color-footer'>Información de contacto</h5>
                    <p className='text-color-footer'>Telefono: 123456789</p>
                    <p className='text-color-footer'>Email: romerosebastian781@gmail.com</p>
                </div>
            </Col>
            <Col>
                <div>
                    <Nav className="text-color-footer h5 d-flex justify-content-center align-items-center flex-column">
                        Links Utiles
                    </Nav>
                    <Nav.Link href="#" className='text-color-footer'>Home</Nav.Link>
                    <Nav.Link href="#" className='text-color-footer'>Catalogo</Nav.Link>
                </div>
            </Col>
        </Row>
        <p className='text-color-footer'>&copy; 2024 Campify. Todos los derechos reservados.</p>
    </Container>
  )
}

export default Footer