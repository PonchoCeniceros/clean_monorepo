// dominio
// aplicación
// infraestructura
import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ui
import LoginForm from './features/auth/components/LoginForm';
import Sidebar from './components/sidebar';
import OnePage from './pages/one';
import TwoPage from './pages/two';

/**
 *
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="1" element={<OnePage />} />
          <Route path="2" element={<TwoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
