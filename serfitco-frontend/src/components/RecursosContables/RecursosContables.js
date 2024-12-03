import React from 'react';
import './RecursosContables.css'; // Estilos específicos para la sección
import CalculadoraFiscal from '../Herramientas/CalculadoraFiscal/CalculadoraFiscal';
import Functionalities from '../Functionalities/Functionalities';
import { Link } from 'react-router-dom';

const RecursosContables = () => {
    return (
        <div className="recursos-container">
            <h1 className="recursos-title">Centro de Recursos Contables</h1>
            <p className="recursos-description">
                Encuentra herramientas, guías y recursos esenciales para gestionar tus finanzas de forma eficiente.
            </p>

            {/* Sección de la Calculadora Fiscal */}
            <div className="recurso-item">
                <CalculadoraFiscal />
            </div>

            {/* Sección de Herramientas Útiles */}
            <div className="recursos-seccion">
                <h2 className="recursos-subtitle">Herramientas Útiles</h2>
                <div className="recursos-grid">
                    <Link to="/herramientas/calculadora-fiscal" className="recurso-item">Calculadora Fiscal</Link>
                    <Link to="/herramientas/simulador-nomina" className="recurso-item">Simulador de Nómina</Link>
                    <Link to="/herramientas/normativas-actualizadas" className="recurso-item">Normativas Actualizadas</Link>
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
