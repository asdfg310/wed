import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Servicios = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        // Realizar la petición GET a la API de Django
        axios.get('http://127.0.0.1:8000/api/servicios/')
            .then(response => setServicios(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Servicios Contables</h1>
            {servicios.length === 0 ? (
                <p className="text-center">No hay servicios disponibles.</p>
            ) : (
                <Row>
                    {servicios.map(servicio => (
                        <Col key={servicio.id} sm={12} md={6} lg={4} className="mb-4">
                            <Card className="shadow">
                                <Card.Body>
                                    <Card.Title>{servicio.nombre}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        ${servicio.precio}
                                    </Card.Subtitle>
                                    <Card.Text>{servicio.descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Servicios;