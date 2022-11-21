import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    asesora: string;
    constructor(name: string, family: string, age: number, asesora: string) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.asesora = asesora;
    }
    communication(): string {
        return this.message;
    }
}
