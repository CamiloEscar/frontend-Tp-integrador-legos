// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* TODO: Agregar rutas adicionales para login, carrito, y administración */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;