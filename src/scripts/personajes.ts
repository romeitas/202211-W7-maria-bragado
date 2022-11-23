import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

export const personajes = [
    new Rey('Joffrey', 'Baratheon', 30, 6),
    new Luchador('Jaime', 'Lannister', 23, 'cañón', 2),
    new Luchador('Daenerys', 'Targaryen', 25, 'cuchillo', 4),
    new Asesor('Tyrion', 'Lannister', 34, 'Daenerys'),
    new Escudero('Bronn', '', 44, 'Jaime', 2),
];
