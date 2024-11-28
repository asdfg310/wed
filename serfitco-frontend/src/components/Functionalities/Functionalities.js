import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Functionalities.css';


const Functionalities = () => {
    const [functionalities, setFunctionalities] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/funcionalidades/')
        
            .then(response => setFunctionalities(response.data))
            .catch(error => console.error('Error fetching data:', error));
            
    }, []);

    return (
        <div>
            <h1>Otras Funcionalidades</h1>
            <ul>
                {functionalities.map(func => (
                    <li key={func.id}>
                        <h2>{func.titulo}</h2>
                        <p>{func.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Functionalities;
