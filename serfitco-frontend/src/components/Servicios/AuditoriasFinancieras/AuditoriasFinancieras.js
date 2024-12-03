import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AuditoriasFinancieras.css';

const AuditoriasFinancieras = () => {
    return (
        <Container className="auditorias-page my-5">
            <h1 className="text-center mb-4">Auditorías Financieras</h1>
            <Row>
                <Col md={12}>
                    <p>
                        En <strong>Serfitco</strong>, nos especializamos en auditorías financieras 
                        para garantizar la integridad de tus finanzas. Con un equipo de expertos 
                        certificados, te ayudamos a identificar riesgos, optimizar procesos y 
                        asegurar el cumplimiento normativo.
                    </p>
                    <h3>¿Qué hacemos por ti?</h3>
                    <ul>
                        <li>Auditorías externas para evaluar tus estados financieros.</li>
                        <li>Revisión y análisis de procesos contables internos.</li>
                        <li>Generación de informes detallados con recomendaciones.</li>
                        <li>Verificación del cumplimiento de normativas fiscales y legales.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default AuditoriasFinancieras;
