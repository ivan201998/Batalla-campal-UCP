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

        // Vale 1 mientras tenga durabilidad.
        var activo = Number(this.durabilidad > 0);

        // Se gasta un punto por uso.
        this.durabilidad = this.durabilidad - activo;

        // Si está activo devuelve la protección.
        // Si se terminó devuelve 0.
        return this.proteccion * activo;
    }
    
    getDurabilidad(): number{
        return this.durabilidad;
    }

    getResistencia(): number {
        return this.resistencia;
    }
}