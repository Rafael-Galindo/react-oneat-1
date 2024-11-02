// Routes.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clientes from './clientes/Clientes';
import ClienteDetalhes from './clientes/ClienteDetalhes';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/clientes/:nome" element={<ClienteDetalhes />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
