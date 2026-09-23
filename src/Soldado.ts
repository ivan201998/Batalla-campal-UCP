import { UnidadCombate } from './UnidadCombate';
import { Escudo } from './Escudo';

export class Soldado extends UnidadCombate {

    private escudo: Escudo;

    constructor() {

        // El soldado sigue trabajando solamente con super(1).
        super(1);

        // Empieza SIN protección.
        this.escudo = new Escudo();

    }

    ponerEscudo(escudo: Escudo): void {

        this.escudo = escudo;

    }

    recibirDisparo(): void {

        var proteccion = this.escudo.usarEscudo();

        this.setVida(
            this.getVida() - (1 - proteccion)
        );

    }
}

//super llama al constructor de la clase padre, UnidadCombate
//1 → el primer parámetro de UnidadCombate, que es vidaInicial