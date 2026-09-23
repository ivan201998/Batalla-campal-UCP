import { Escudo } from './Escudo';

export abstract class UnidadCombate {

    private vida: number;

    constructor(vidaInicial: number) {

        this.vida = vidaInicial;

    }

    protected getVida(): number {

        return this.vida;

    }

    protected setVida(valor: number): void {

        this.vida = valor;

    }

    recibirDisparo(): void {

        this.setVida(this.getVida() - 1);

    }

    estaVivo(): boolean {

        return this.getVida() > 0;

    }

    disparar(objeto: UnidadCombate): void {

        objeto.recibirDisparo();

    }
}