import React, { useState } from "react";
import "./CalculadoraFiscal.css";

const CalculadoraFiscal = () => {
    const [ingreso, setIngreso] = useState("");
    const [tasa, setTasa] = useState(15); // Tasa predeterminada (15%)
    const [moneda, setMoneda] = useState("COP");
    const [resultado, setResultado] = useState(null);

    const formatoMoneda = (valor, currency) => {
        return valor.toLocaleString("es-CO", {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 2, // Mostrar dos decimales
            maximumFractionDigits: 2,
        });
    };

    const calcularImpuestos = () => {
        const impuesto = (ingreso * tasa) / 100; // Cálculo basado en la tasa
        setResultado(impuesto);
    };

    return (
        <div className="calculadora-container">
            <h2 className="calculadora-title">Calculadora Fiscal</h2>
            <p className="calculadora-description">
                Estime sus impuestos aproximados seleccionando la tasa de impuesto y la moneda deseada.
            </p>
            <div className="calculadora-form">
                {/* Selección de la moneda */}
                <label className="calculadora-label">Seleccione tu moneda:</label>
                <select
                    className="calculadora-select"
                    value={moneda}
                    onChange={(e) => setMoneda(e.target.value)}
                >
                    <option value="COP">Pesos Colombianos (COP)</option>
                    <option value="USD">Dólares (USD)</option>
                    <option value="EUR">Euros (EUR)</option>
                </select>

                {/* Selección de la tasa */}
                <label className="calculadora-label">Tasa de impuesto (%):</label>
                <input
                    type="number"
                    value={tasa}
                    onChange={(e) => setTasa(e.target.value)}
                    placeholder="Ingresa la tasa (%)"
                    className="calculadora-input"
                />

                {/* Ingreso de ingresos */}
                <label className="calculadora-label">Ingrese sus ingresos:</label>
                <input
                    type="number"
                    value={ingreso}
                    onChange={(e) => setIngreso(e.target.value)}
                    placeholder="Ingresa tus ingresos"
                    className="calculadora-input"
                />
                <button onClick={calcularImpuestos} className="calculadora-button">
                    Calcular Impuestos
                </button>
            </div>

            {resultado !== null && (
                <p className="calculadora-result">
                    Impuestos estimados: {formatoMoneda(resultado, moneda)}
                </p>
            )}
        </div>
    );
};

export default CalculadoraFiscal;
