// src/App.tsx
import React from 'react';
import './App.css';

function App() {
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
  };

  return (
    <div className="App">
      <h1>🚗 Informations sur la voiture</h1>
      <p><strong>Marque :</strong> {car.make}</p>
      <p><strong>Modèle :</strong> {car.model}</p>
      <p><strong>Année :</strong> {car.year}</p>
    </div>
  );
}

export default App;
