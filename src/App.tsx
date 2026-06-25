import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';
import Privacidad from './pages/Privacidad';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="sobre-nosotros" element={<SobreNosotros />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="terminos" element={<Terminos />} />
            <Route path="privacidad" element={<Privacidad />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
