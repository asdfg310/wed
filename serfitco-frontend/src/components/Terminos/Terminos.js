import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Terminos.css"; // Archivo CSS específico para esta página

const Terminos = () => {
  return (
    <Container className="terminos-page my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Términos y Condiciones</h1>
          <p>
            Bienvenido a Serfitco. Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro sitio web.
          </p>
          <h3>1. Aceptación de los Términos</h3>
          <p>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando nuestro sitio si no aceptas todos los términos establecidos en esta página.
          </p>
          <h3>2. Servicios Ofrecidos</h3>
          <p>
            Serfitco se compromete a brindar servicios de contabilidad y asesoramiento financiero según las necesidades de nuestros clientes.
          </p>
          <h3>3. Limitaciones de Uso</h3>
          <p>
            No puedes utilizar este sitio web de ninguna manera que pueda dañar o deteriorar la disponibilidad o accesibilidad del sitio.
          </p>
          <h3>4. Cambios en los Términos</h3>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Se te notificará de los cambios en esta página.
          </p>
          <p className="text-center mt-5">
            Si tienes preguntas sobre estos términos, no dudes en contactarnos a través de nuestra página de <a href="/contacto">Contacto</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Terminos;
