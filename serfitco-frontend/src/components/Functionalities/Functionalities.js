import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Functionalities.css';

const Functionalities = () => {
    const [functionalities, setFunctionalities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/funcionalidades/')
            .then(response => {
                setFunctionalities(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Hubo un problema al cargar las funcionalidades. Por favor, inténtalo más tarde.');
                setLoading(false);
            });
    }, []);

    return (
        <div className="functionalities-container">
            {loading && <p>Cargando funcionalidades...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul className="functionalities-list">
                    {functionalities.map(func => (
                        <li key={func.id}>
                            <h2>{func.titulo}</h2>
                            <p>{func.descripcion}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Functionalities;
