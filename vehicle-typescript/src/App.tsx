import React, { useState, useEffect } from 'react';
import { Car } from './Vehicle';
import './App.css';

function App() {
  const [voiture, setVoiture] = useState<Car | null>(null);

  useEffect(() => {
    const maVoiture = new Car("Toyota", "Corolla", 2022);
    maVoiture.start();
    setVoiture(maVoiture);
  }, []);

  return (
    <div className="App">
      <h1>Mon projet TypeScript</h1>
      {voiture && (
        <div>
          <p><strong>Marque :</strong> {voiture.make}</p>
          <p><strong>Modèle :</strong> {voiture.model}</p>
          <p><strong>Année :</strong> {voiture.year}</p>
        </div>
      )}
      <p>Ouvre la console pour voir le résultat du démarrage de la voiture.</p>
    </div>
  );
}

export default App;
