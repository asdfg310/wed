import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> {/* Mantiene la barra fija en la parte superior */}
            <Container>
                <Navbar.Brand href="/">Serfitco</Navbar.Brand> {/* El logo de Serfitco como enlace a la página principal */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Alineamos las opciones de navegación a la derecha */}
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/servicios">Servicios</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
