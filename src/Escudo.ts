export class Escudo {
    private proteccion: number;
    constructor(proteccion: number = 0){

        this.proteccion = proteccion;

    }

    usarEscudo(): number {

        var valor = this.proteccion;

        this.proteccion = 0;

        return valor;
    }
        
}