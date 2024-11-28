import React, { useState } from 'react';
import './CalculadoraFiscal.css';

const CalculadoraFiscal = () => {
    const [ingreso, setIngreso] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularImpuestos = () => {
        const impuesto = ingreso * 0.15; // Supongamos un 15% de impuestos
        setResultado(impuesto);
    };

    return (
        <div className="calculadora-container">
            <h2 className="calculadora-title">Calculadora Fiscal</h2>
            <input
                type="number"
                value={ingreso}
                onChange={(e) => setIngreso(e.target.value)}
                placeholder="Ingrese sus ingresos"
                className="calculadora-input"
            />
            <button onClick={calcularImpuestos} className="calculadora-button">
                Calcular
            </button>
            {resultado !== null && <p className="calculadora-result">Impuestos: ${resultado}</p>}
        </div>
    );
};

export default CalculadoraFiscal;
