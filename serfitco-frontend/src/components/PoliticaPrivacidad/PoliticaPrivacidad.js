import React from 'react';
import './PoliticaPrivacidad.css';

const PoliticaPrivacidad = () => {
    return (
        <div className="politica-container">
            <h1 className="politica-title">Política de Privacidad</h1>
            <p>
                En <strong>Serfitco</strong>, valoramos la privacidad de nuestros clientes y nos comprometemos a proteger sus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos su información.
            </p>
            <h2>Recopilación de Información</h2>
            <p>
                Podemos recopilar información personal como nombre, correo electrónico, número de teléfono y datos fiscales para proporcionar nuestros servicios de manera eficiente.
            </p>
            <h2>Uso de la Información</h2>
            <p>
                Los datos recopilados se utilizan exclusivamente para fines operativos, incluyendo:
            </p>
            <ul>
                <li>Proveer los servicios solicitados.</li>
                <li>Mejorar la experiencia del usuario.</li>
                <li>Cumplir con requisitos legales.</li>
            </ul>
            <h2>Protección de Datos</h2>
            <p>
                Implementamos medidas de seguridad avanzadas para garantizar que su información esté protegida contra accesos no autorizados.
            </p>
            <h2>Contacto</h2>
            <p className="text-center mt-5">
            Si tienes preguntas sobre estas politicas, no dudes en contactarnos a través de nuestra página de <a href="/contacto">Contacto</a>.
          </p>
        </div>
    );
};

export default PoliticaPrivacidad;
