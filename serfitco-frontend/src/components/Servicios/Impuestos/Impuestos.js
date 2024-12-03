import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Impuestos.css';

const Impuestos = () => {
    return (
        <Container className="impuestos-page my-5">
            <h1 className="text-center mb-4">Declaración de Impuestos</h1>
            <Row>
                <Col md={12}>
                    <p>
                        En <strong>Serfitco</strong>, entendemos lo complejo que puede ser manejar los impuestos, 
                        por eso ofrecemos servicios especializados para asegurarnos de que tu empresa o tu declaración personal cumpla con todas las normativas fiscales vigentes.
                    </p>
                    <h3>¿Qué hacemos por ti?</h3>
                    <ul>
                        <li>Revisión detallada de tu situación fiscal.</li>
                        <li>Preparación y presentación de declaraciones tributarias.</li>
                        <li>Asesoramiento personalizado para optimizar tus deducciones.</li>
                        <li>Gestión de impuestos para personas naturales y empresas.</li>
                        <li>Resolución de problemas fiscales o retrasos en pagos.</li>
                    </ul>
                    <p>
                        Confía en nosotros para garantizar el cumplimiento con la ley, optimizando al máximo tus recursos. 
                        Nuestro equipo está conformado por expertos con amplia experiencia en normativas fiscales.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Impuestos;
