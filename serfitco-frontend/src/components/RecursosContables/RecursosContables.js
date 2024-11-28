import React from 'react';
import './RecursosContables.css'; // Estilos específicos para la sección
import CalculadoraFiscal from '../CalculadoraFiscal/CalculadoraFiscal';
import Functionalities from '../Functionalities/Functionalities';

const RecursosContables = () => {
    return (
        <div className="recursos-container">
            <h1 className="recursos-title">Centro de Recursos Contables</h1>
            <p className="recursos-description">
                Encuentra herramientas, guías y recursos esenciales para gestionar tus finanzas de forma eficiente.
            </p>

            {/* Sección de la Calculadora Fiscal */}
            <div className="recurso-item">
                <h2>Calculadora Fiscal</h2>
                <CalculadoraFiscal />
            </div>

            {/* Sección de Herramientas Útiles */}
            <div className="recursos-seccion">
                <h2 className="recursos-subtitle">Herramientas Útiles</h2>
                <div className="recursos-grid">
                    <div className="recurso-item">Calculadora Fiscal</div>
                    <div className="recurso-item">Simulador de Nómina</div>
                    <div className="recurso-item">Normativas Actualizadas</div>
                </div>
            </div>

            {/* Sección de Otras Funcionalidades */}
            <div className="recursos-seccion">
                <h2 className="recursos-subtitle">Otras Funcionalidades</h2>
                <Functionalities />
            </div>
        </div>
    );
};

export default RecursosContables;
