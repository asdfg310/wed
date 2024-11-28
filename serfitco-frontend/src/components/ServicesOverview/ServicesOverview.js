import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverview.css'; // Estilos específicos para la sección

const ServicesOverview = () => {
    const services = [
        {
            title: 'Declaración de Impuestos',
            description: 'Asesoría especializada en la declaración de impuestos.',
            icon: '🧾',
            link: '/servicios/impuestos',
        },
        {
            title: 'Auditorías Financieras',
            description: 'Auditorías precisas para mantener la integridad de tus finanzas.',
            icon: '📊',
            link: '/servicios/auditorias',
        },
        {
            title: 'Gestión de Nóminas',
            description: 'Administración eficiente de nóminas para empresas.',
            icon: '💼',
            link: '/servicios/nominas',
        },
        {
            title: 'Planeación Financiera',
            description: 'Estrategias efectivas para alcanzar tus metas financieras.',
            icon: '📈',
            link: '/servicios/planeacion',
        },
    ];

    return (
        <section className="services-overview">
            <h2 className="services-title">Nuestros Servicios</h2>
            <p className="services-description">
                Descubre nuestras soluciones diseñadas para optimizar tus finanzas y procesos.
            </p>
            <div className="service-cards">
                {services.map((service, index) => (
                    <Link key={index} to={service.link} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServicesOverview;
