import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Legos</h1>
      <h2>IMAGENES, OFERTAS, BUSQUEDA</h2>
      {/* TODO: Agregar todo, imagenes, ofertas, busqueda y ordenamiento por precio y popularidad */}
    </div>
  );
}

export default Home;
