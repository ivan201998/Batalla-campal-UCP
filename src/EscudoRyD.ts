export class EscudoRyD {
    private proteccion: number;
    private durabilidad: number;
    private resistencia: number;

    constructor(proteccion: number = 0, 
        durabilidad: number = 0 , 
        resistencia: number = 0){

        this.proteccion = proteccion;
        this.durabilidad = durabilidad;
        this.resistencia = resistencia;

    }

    usarEscudo(): number {

        var valor = this.proteccion;

        this.proteccion = 0;

        return valor;
    }
    
    getDurabilidad(): number{
        return this.durabilidad;
    }

    getResistencia(): number {
        return this.resistencia;
    }
}