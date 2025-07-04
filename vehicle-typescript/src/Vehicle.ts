// src/Vehicle.ts
export interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

export class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}
