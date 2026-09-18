import { Escudo } from './Escudo';

export abstract class UnidadCombate {
    private vida: number;
    
    constructor(vidaInicial: number, private readonly escudo : Escudo = new Escudo()) {
        this.vida = vidaInicial;
    }

    private getVida(): number{
        return this.vida;
    }

    private setVida(valor: number): void{
        this.vida = valor;
    }

    recibirDisparo(): void{
        this.setVida(this.getVida() - this.escudo.aplicar(1));
    }

    estaVivo(): boolean {
        return this.getVida() > 0;

    }

    disparar(objeto: UnidadCombate): void {
        objeto.recibirDisparo();
    }
}