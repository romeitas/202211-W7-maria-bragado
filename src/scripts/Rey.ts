import { Personaje } from './Personaje.js';

export class Rey extends Personaje {
    añosReinado: number;
    constructor(
        name: string,
        family: string,
        age: number,
        añosReinado: number
    ) {
        super(name, family, age);
        this.añosReinado = añosReinado;
        this.message = 'Vais a morir todos';
    }

    communication(): string {
        return this.message;
    }
}
