import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Serfitco ha sido un pilar en el manejo de nuestras finanzas corporativas.",
            author: "Carlos Martínez, CEO de Finanzas Global",
        },
        {
            quote: "Excelente asesoría contable y soluciones financieras.",
            author: "Laura Gómez, Directora de Recursos Humanos",
        },
        {
            quote: "Gracias a Serfitco, optimizamos nuestros procesos fiscales con éxito.",
            author: "Javier López, Gerente General",
        },
    ];

    return (
        <section className="testimonials">
            <h2 className="testimonials-title">Lo que dicen nuestros clientes</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
