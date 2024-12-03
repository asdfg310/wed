import React from 'react';
import './NormativasActualizadas.css';

const NormativasActualizadas = () => {
    return (
        <div className="normativas-container">
            <h2 className="normativas-title">Normativas Actualizadas</h2>
            <p>Acceda a las últimas normativas legales y contables de Colombia.</p>
            <ul className="normativas-list">
                <li>Resolución 1234: Cambios en la seguridad social.</li>
                <li>Decreto 5678: Actualización de tarifas de retención en la fuente.</li>
                <li>Circular 9012: Nuevas disposiciones sobre nóminas electrónicas.</li>
            </ul>
        </div>
    );
};

export default NormativasActualizadas;
