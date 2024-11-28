import React, { useState } from 'react';

const CalculadoraFiscal = () => {
    const [ingreso, setIngreso] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularImpuestos = () => {
        const impuesto = ingreso * 0.15; // Supongamos un 15% de impuestos
        setResultado(impuesto);
    };

    return (
        <div>
            <h2>Calculadora Fiscal</h2>
            <input
                type="number"
                value={ingreso}
                onChange={(e) => setIngreso(e.target.value)}
                placeholder="Ingrese sus ingresos"
            />
            <button onClick={calcularImpuestos}>Calcular</button>
            {resultado !== null && <p>Impuestos: ${resultado}</p>}
        </div>
    );
};

export default CalculadoraFiscal;
