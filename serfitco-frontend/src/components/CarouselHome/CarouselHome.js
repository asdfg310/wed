import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';


const CarouselHome = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className="d-block w-100" src={Image1} alt="Bienvenido a Serfitco" />
                <Carousel.Caption>
                    <h1>Bienvenido a Serfitco</h1>
                    <p>Tu socio en servicios contables y financieros.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Image2} alt="Auditorías Financieras" />
                <Carousel.Caption>
                    <h1>Auditorías Financieras</h1>
                    <p>Auditorías precisas para mantener la integridad de tus finanzas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Image3} alt="Gestión de Nóminas" />
                <Carousel.Caption>
                    <h1>Gestión de Nóminas</h1>
                    <p>Administración eficiente de nóminas para empresas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Image4} alt="Declaración de Impuestos" />
                <Carousel.Caption>
                    <h1>Declaración de Impuestos</h1>
                    <p>Asesoría especializada en la declaración de impuestos.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselHome;
