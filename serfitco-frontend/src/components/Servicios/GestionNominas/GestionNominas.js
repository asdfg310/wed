import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GestionNominas.css';

const GestionNominas = () => {
    return (
        <Container className="nominas-page my-5">
            <h1 className="text-center mb-4">Gestión de Nóminas</h1>
            <Row>
                <Col md={12}>
                    <p>
                        En <strong>Serfitco</strong>, sabemos que una gestión eficiente de nóminas es clave para el éxito de cualquier empresa. 
                        Ofrecemos servicios personalizados para manejar tus procesos de nómina con precisión y cumplimiento normativo.
                    </p>
                    <h3>¿Qué hacemos por ti?</h3>
                    <ul>
                        <li>Elaboración y cálculo detallado de nóminas.</li>
                        <li>Gestión de aportes a seguridad social y prestaciones legales.</li>
                        <li>Automatización de reportes para mayor eficiencia.</li>
                        <li>Asesoría en cumplimiento de normativas laborales.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default GestionNominas;
