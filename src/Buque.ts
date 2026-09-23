import { UnidadCombate } from "./UnidadCombate";
import { Escudo } from "./Escudo";

export class Buque extends UnidadCombate{
    constructor(){//? Si al crear el Soldado no le pasás ninguno (new Soldado())
        super(3);
    }
}

//super llama al constructor de la clase padre, UnidadCombate
//3 → el primer parámetro de UnidadCombate, que es vidaInicial