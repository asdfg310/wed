import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contacto = () => {
    return (
        <Container className="my-5">
            <h2>Contáctanos</h2>
            <p>¿Tienes preguntas o necesitas ayuda? Envíanos un mensaje.</p>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="correo">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="mensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default Contacto;
