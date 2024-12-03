import React from 'react';
import logo from "../../assets/serfitco-logo.png"; // Logo de la empresa
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css'; // Archivo de estilos personalizado

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
            <Container>
                {/* Logo con enlace a la página principal */}
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Serfitco Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-name ms-2">Serfitco</span>
                </Navbar.Brand>
                {/* Botón para colapsar la barra en dispositivos pequeños */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="nav-link-custom" title="Ir a Inicio">Inicio</Nav.Link>
                        <Nav.Link href="/servicios" className="nav-link-custom" title="Ver Servicios">Servicios</Nav.Link>
                        <Nav.Link href="/recursos-contables" className="nav-link-custom" title="Ver Recursos">Recursos Contables</Nav.Link>
                        <Nav.Link href="/contacto" className="nav-link-custom" title="Contáctanos">Contáctanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
