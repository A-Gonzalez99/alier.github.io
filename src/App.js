import './App.css';
import Inicio from './paginas/inicio';
import Contacto from './paginas/contacto';
import Curriculum from './paginas/curriculum';
import Proyectos from './paginas/proyectos';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/*" element={<Inicio />} />

      </Routes>
    </Router>
  );
}

export default App;
