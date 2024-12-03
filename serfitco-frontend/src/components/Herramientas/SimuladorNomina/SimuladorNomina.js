import React, { useState } from 'react';
import './SimuladorNomina.css';

const SimuladorNomina = () => {
    const [salarioBase, setSalarioBase] = useState('');
    const [deducciones, setDeducciones] = useState('');
    const [bonificaciones, setBonificaciones] = useState('');
    const [porcentajeImpuesto, setPorcentajeImpuesto] = useState('');
    const [salarioNeto, setSalarioNeto] = useState(null);

    const calcularNomina = () => {
        const salarioBaseNum = parseFloat(salarioBase) || 0;
        const deduccionesNum = parseFloat(deducciones) || 0;
        const bonificacionesNum = parseFloat(bonificaciones) || 0;
        const porcentajeImpuestoNum = parseFloat(porcentajeImpuesto) || 0;

        // Calcula el salario bruto (salario base + bonificaciones - deducciones)
        const salarioBruto = salarioBaseNum + bonificacionesNum - deduccionesNum;

        // Calcula los impuestos
        const impuestos = (salarioBruto * porcentajeImpuestoNum) / 100;

        // Calcula el salario neto
        const neto = salarioBruto - impuestos;

        setSalarioNeto(neto.toFixed(2)); // Formatea el resultado con 2 decimales
    };

    return (
        <div className="simulador-container">
            <h2 className="simulador-title">Simulador de Nómina</h2>
            <p className="simulador-description">
                Completa los campos a continuación para calcular el salario neto después de deducciones e impuestos.
            </p>

            <div className="simulador-form">
                <label>Salario Base:</label>
                <input
                    type="number"
                    placeholder="Ingresa el salario base"
                    value={salarioBase}
                    onChange={(e) => setSalarioBase(e.target.value)}
                />

                <label>Deducciones (Salud, Pensión):</label>
                <input
                    type="number"
                    placeholder="Ingresa las deducciones"
                    value={deducciones}
                    onChange={(e) => setDeducciones(e.target.value)}
                />

                <label>Bonificaciones (Bonos, Horas Extras):</label>
                <input
                    type="number"
                    placeholder="Ingresa las bonificaciones"
                    value={bonificaciones}
                    onChange={(e) => setBonificaciones(e.target.value)}
                />

                <label>Porcentaje de Impuestos (%):</label>
                <input
                    type="number"
                    placeholder="Ingresa el porcentaje de impuestos"
                    value={porcentajeImpuesto}
                    onChange={(e) => setPorcentajeImpuesto(e.target.value)}
                />

                <button onClick={calcularNomina} className="simulador-button">
                    Calcular Nómina
                </button>
            </div>

            {salarioNeto !== null && (
                <div className="simulador-result">
                    <h3>Salario Neto:</h3>
                    <p>${salarioNeto}</p>
                </div>
            )}
        </div>
    );
};

export default SimuladorNomina;
