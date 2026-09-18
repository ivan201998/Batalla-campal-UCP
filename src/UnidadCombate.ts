import { Escudo } from './Escudo';

export abstract class UnidadCombate {
    private vida: number;
    
    constructor(vidaInicial: number, private readonly escudo : Escudo = new Escudo()) {
        this.vida = vidaInicial;
    }

    recibirDisparo(): void{
        this.vida -= this.escudo.aplicar(1);//si no va el - se rompe porque no decrementa
    }

    estaVivo(): boolean {
        return this.vida >0;

    }

    disparar(objeto: UnidadCombate): void {
        objeto.recibirDisparo();
    }
}