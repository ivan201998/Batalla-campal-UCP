import { UnidadCombate } from "./UnidadCombate";
import { Escudo } from "./Escudo";

export class Tanque extends UnidadCombate{
    constructor(){
        super(2);
    }
}

//super llama al constructor de la clase padre, UnidadCombate
//2 → el primer parámetro de UnidadCombate, que es vidaInicial