// fichier main.ts

// 1. Interface Vehicle
interface Vehicle {
  make: string;          // Marque du véhicule
  model: string;         // Modèle du véhicule
  year: number;          // Année de fabrication
  start(): void;         // Méthode pour démarrer
}

// 2. Classe Car qui implémente Vehicle
class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}

// 3. Création d'une instance
const myCar = new Car("Toyota", "Corolla", 2022);

// 4. Appel de la méthode start
myCar.start();
