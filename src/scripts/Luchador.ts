import { Personaje } from './Personaje.js';

export class Luchador extends Personaje {
    arma: string;
    destreza: number;
    constructor(
        name: string,
        family: string,
        age: number,
        arma: string,
        destreza: number
    ) {
        super(name, family, age);
        (this.arma = arma),
            (this.destreza = destreza),
            (this.message = 'Primero pego y luego pregunto');
    }
    communication(): string {
        return this.message;
    }
}
