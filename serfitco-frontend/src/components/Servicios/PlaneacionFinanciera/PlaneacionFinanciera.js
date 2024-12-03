import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PlaneacionFinanciera.css';

const PlaneacionFinanciera = () => {
    return (
        <Container className="planeacion-page my-5">
            <h1 className="text-center mb-4">Planeación Financiera</h1>
            <Row>
                <Col md={12}>
                    <p>
                        En <strong>Serfitco</strong>, entendemos que la planeación financiera es clave para lograr objetivos personales y empresariales. 
                        Ofrecemos estrategias personalizadas para ayudarte a optimizar tus recursos y alcanzar tus metas económicas.
                    </p>
                    <h3>¿Qué incluye nuestro servicio?</h3>
                    <ul>
                        <li>Diseño de presupuestos personalizados.</li>
                        <li>Proyecciones financieras a corto, mediano y largo plazo.</li>
                        <li>Análisis y optimización de flujos de caja.</li>
                        <li>Asesoría en inversiones y manejo de riesgos.</li>
                        <li>Consultoría en planificación fiscal estratégica.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaneacionFinanciera;
