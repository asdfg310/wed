import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselHome.css'; // Archivo CSS mejorado
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';

const CarouselHome = () => {
    const slides = [
        {
            image: Image1,
            title: "Bienvenido a Serfitco",
            description: "Tu socio en servicios contables y financieros."
        },
        {
            image: Image2,
            title: "Auditorías Financieras",
            description: "Auditorías precisas para mantener la integridad de tus finanzas."
        },
        {
            image: Image3,
            title: "Gestión de Nóminas",
            description: "Administración eficiente de nóminas para empresas."
        },
        {
            image: Image4,
            title: "Declaración de Impuestos",
            description: "Asesoría especializada en la declaración de impuestos."
        },
    ];

    return (
        <Carousel fade>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.title}
                    />
                    <Carousel.Caption>
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselHome;
