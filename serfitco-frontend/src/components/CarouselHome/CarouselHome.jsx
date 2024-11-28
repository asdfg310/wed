import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselHome.css';

// Datos del carrusel
const carouselItems = [
    {
        image: require('../../assets/image1.jpg'),
        title: 'Bienvenido a Serfitco',
        description: 'Tu socio en servicios contables y financieros.',
    },
    {
        image: require('../../assets/image2.jpg'),
        title: 'Auditorías Financieras',
        description: 'Auditorías precisas para mantener la integridad de tus finanzas.',
    },
    {
        image: require('../../assets/image3.jpg'),
        title: 'Gestión de Nóminas',
        description: 'Administración eficiente de nóminas para empresas.',
    },
    {
        image: require('../../assets/image4.jpg'),
        title: 'Declaración de Impuestos',
        description: 'Asesoría especializada en la declaración de impuestos.',
    },
];

const CarouselHome = () => {
    return (
        <Carousel fade>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                    {/* Imagen del carrusel */}
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.title}
                        loading="lazy" // Mejora la carga diferida
                    />
                    {/* Contenido del carrusel */}
                    <Carousel.Caption>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselHome;
