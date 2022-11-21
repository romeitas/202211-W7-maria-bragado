import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    sirve: string;
    pelotismo: number;
    constructor(
        name: string,
        family: string,
        age: number,
        sirve: string,
        pelotismo: number
    ) {
        super(name, family, age);
        this.sirve = sirve;
        this.pelotismo = pelotismo;
        this.message = 'Soy un loser';
    }
    communication(): string {
        return this.message;
    }
}
