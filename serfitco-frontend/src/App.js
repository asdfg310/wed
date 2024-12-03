import React from 'react';
import RecursosContables from './components/RecursosContables/RecursosContables';
import Servicios from './components/Servicios/Servicios';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import CarouselHome from './components/CarouselHome/CarouselHome';
import ServicesOverview from './components/ServicesOverview/ServicesOverview';
import Testimonials from './components/Testimonials/Testimonials';
import Contacto from './components/Contacto/Contacto';
import CalculadoraFiscal from './components/Herramientas/CalculadoraFiscal/CalculadoraFiscal';
import SimuladorNomina from './components/Herramientas/SimuladorNomina/SimuladorNomina';
import NormativasActualizadas from './components/Herramientas/NormativasActualizadas/NormativasActualizadas';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Impuestos from './components/Servicios/Impuestos/Impuestos';
import AuditoriasFinancieras from './components/Servicios/AuditoriasFinancieras/AuditoriasFinancieras';
import GestionNominas from './components/Servicios/GestionNominas/GestionNominas';
import PlaneacionFinanciera from './components/Servicios/PlaneacionFinanciera/PlaneacionFinanciera';
import PoliticaPrivacidad from './components/PoliticaPrivacidad/PoliticaPrivacidad';
import Terminos from './components/Terminos/Terminos';








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

                    {/* Rutas para herramientas útiles */}
                    <Route path="/herramientas/calculadora-fiscal" element={<CalculadoraFiscal />} />
                    <Route path="/herramientas/simulador-nomina" element={<SimuladorNomina />} />
                    <Route path="/herramientas/normativas-actualizadas" element={<NormativasActualizadas />} />
                    <Route path="/servicios/impuestos" element={<Impuestos />} />
                    <Route path="/servicios/auditorias" element={<AuditoriasFinancieras />} />
                    <Route path="/servicios/nominas" element={<GestionNominas />} />
                    <Route path="/servicios/planeacion" element={<PlaneacionFinanciera />} />
                    <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
                    <Route path="/terminos" element={<Terminos />} />





                </Routes>
            </Container>

            {/* Pie de página */}
            <Footer />
        </Router>
    );
};

export default App;
