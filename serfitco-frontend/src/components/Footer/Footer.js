import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          {/* Sección de descripción */}
          <Col md={4}>
            <h5>Serfitco</h5>
            <p>
              Tu socio en servicios contables y financieros. Confía en nosotros para gestionar tus finanzas de manera eficiente.
            </p>
          </Col>

          {/* Redes sociales */}
          <Col md={4} className="text-center">
            <h5>Síguenos</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>

          {/* Enlaces rápidos */}
          <Col md={4}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/privacidad">Política de Privacidad</a>
              </li>
              <li>
                <a href="/terminos">Términos y Condiciones</a>
              </li>
              <li>
                <a href="/contacto">Contáctanos</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Serfitco. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
