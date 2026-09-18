import { UnidadCombate } from './UnidadCombate';
import { Escudo } from './Escudo';

export class Soldado extends UnidadCombate{
    constructor(escudo?: Escudo) {//? Si al crear el Soldado no le pasás ninguno (new Soldado())
        super(1, escudo);
    }
}

//super llama al constructor de la clase padre, UnidadCombate
//1 → el primer parámetro de UnidadCombate, que es vidaInicial