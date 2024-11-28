import React from 'react';
import RecursosContables from './components/RecursosContables/RecursosContables';
import Servicios from './components/Servicios/Servicios';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import CarouselHome from './components/CarouselHome/CarouselHome';
import ServicesOverview from './components/ServicesOverview/ServicesOverview';
import Testimonials from './components/Testimonials/Testimonials';
import Contacto from './components/Contacto';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Router>
            {/* Barra de Navegación */}
            <NavigationBar />
            
            <Container fluid className="p-0"> {/* Contenedor fluido para el contenido principal */}
                <Routes>
                    {/* Ruta para la página de recursos contables */}
                    <Route path="/recursos-contables" element={<RecursosContables />} />

                    {/* Ruta para la página de servicios */}
                    <Route path="/servicios" element={<Servicios />} />
                    
                    {/* Ruta para la página de inicio */}
                    <Route path="/" element={
                        <div className="home">
                            {/* Carrusel modularizado */}
                            <CarouselHome />
                            
                            {/* Vista general de servicios modularizada */}
                            <ServicesOverview />
                            
                            {/* Testimonios modularizados */}
                            <Testimonials />
                        </div>
                    } />

                    {/* Ruta para la página de contacto */}
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </Container>

            {/* Pie de página */}
            <Footer />
        </Router>
    );
};

export default App;
