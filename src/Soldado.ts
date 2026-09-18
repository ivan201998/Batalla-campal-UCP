import { UnidadCombate } from './UnidadCombate';
import { Escudo } from './Escudo';

export class Soldado extends UnidadCombate{
    constructor(escudo?: Escudo) {
        super(1, escudo);
    }
}