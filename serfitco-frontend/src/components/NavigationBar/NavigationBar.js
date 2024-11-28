import React from 'react';
import logo from "../../assets/serfitco-logo.png";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css'; // Archivo de estilos para personalizaciones

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="Serfitco Logo"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-name">Serfitco</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="nav-link-custom">Inicio</Nav.Link>
                        <Nav.Link href="/servicios" className="nav-link-custom">Servicios</Nav.Link>
                        <Nav.Link href="/contacto" className="nav-link-custom">Contáctanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
