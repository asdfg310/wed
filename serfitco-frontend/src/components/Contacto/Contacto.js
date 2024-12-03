import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        celular: '',  // Campo nuevo
        mensaje: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/contacto/enviar/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Mensaje enviado exitosamente.');
                setFormData({ nombre: '', correo: '', celular: '', mensaje: '' });
            } else {
                const errorData = await response.json();
                setStatus(`Error: ${errorData.error}`);
            }
        } catch (error) {
            setStatus(`Error al enviar el mensaje: ${error.message}`);
        }
    };

    return (
        <Container className="my-5">
            <h2>Contáctanos</h2>
            <p>¿Tienes preguntas o necesitas ayuda? Envíanos un mensaje.</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ingresa tu nombre"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="correo">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type="email"
                                name="correo"
                                value={formData.correo}
                                onChange={handleChange}
                                placeholder="Ingresa tu correo"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="celular">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                type="text"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                                placeholder="Ingresa tu número de celular"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="mensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            {status && <p className="mt-3">{status}</p>}
        </Container>
    );
};

export default Contacto;
