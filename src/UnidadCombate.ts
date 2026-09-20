import { Escudo } from './Escudo';
//para agregar pistola
import { Pistola } from './Pistola';
//para agregar granada
import { Granada } from './Granada';

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

    //metodo para aplicar arma
    dispararArma(objeto: UnidadCombate, arma: Pistola): void{
        // objeto = tanque
        // arma   = pistola
        objeto.setVida(objeto.getVida()- objeto.escudo.aplicar(arma.disparar()));
    }

    //metodo granada
    tirargranada(objeto: UnidadCombate, arma: Granada): void{
        objeto.setVida(objeto.getVida() - objeto.escudo.aplicar(arma.lanzar()));
    }

}