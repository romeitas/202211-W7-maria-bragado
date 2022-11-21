import { Rey } from './rey.js';
import { Luchador } from './luchador.js';
import { Asesor } from './asesor.js';
import { Escudero } from './escudero.js';

export const Personajes = [
    new Rey('Joffrey', 'Baratheon', 30, 6),
    new Luchador('Jaime', 'Lannister', 23, 'cañón', 2),
    new Luchador('Daenerys', 'Targaryen', 25, 'cuchillo', 4),
    new Asesor('Tyrion', 'Lannister', 34, 'Daenerys'),
    new Escudero('Bronn', '', 44, 'Jaime', 2),
];
