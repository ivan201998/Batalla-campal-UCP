import { UnidadCombate } from "./UnidadCombate";
import { Escudo } from "./Escudo";

export class Buque extends UnidadCombate{
    constructor(){
        super(3);
    }
}

//super llama al constructor de la clase padre, UnidadCombate
//3 → el primer parámetro de UnidadCombate, que es vidaInicial