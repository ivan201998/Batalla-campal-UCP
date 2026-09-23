import { UnidadCombate } from './UnidadCombate';
import { Escudo } from './Escudo';
import { EscudoRyD } from './EscudoRyD';

export class Soldado extends UnidadCombate {

    private escudo: Escudo;
    private escudoRyD: EscudoRyD;

    constructor() {

        // El soldado sigue trabajando solamente con super(1).
        super(1);

        // Empieza SIN protección.
        this.escudo = new Escudo();

        this.escudoRyD = new EscudoRyD();

    }

    ponerEscudo(escudo: Escudo): void {

        this.escudo = escudo;

    }

    ponerEscudoRyD(escudoRyD: EscudoRyD): void {

        this.escudoRyD = escudoRyD;

    }

    recibirDisparo(): void {

        var proteccion = this.escudo.usarEscudo();

        this.setVida(
            this.getVida() - (1 - proteccion)
        );

    }

    recibirDisparoRyD(): void {

        var proteccion = this.escudoRyD.usarEscudo();

        this.setVida(
            this.getVida() - (1 - proteccion)
        );

    }
}

//super llama al constructor de la clase padre, UnidadCombate
//1 → el primer parámetro de UnidadCombate, que es vidaInicial