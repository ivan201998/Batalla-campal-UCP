export class Soldado {
    constructor(
        public salud: number,
        public ataque: number
    ){}


//el Soldado dispara a otro soldado
Disparar (objeto: Soldado): void{
    //recibe el soldado de este soldado
    objeto.recibirDisparo(this.ataque);
}

//el soldado recibe un disparo
recibirDisparo(ataque: number): void{
    //sacamos vida
    this.salud = this.salud - ataque;

}

//el estado del buque
Estadovivo(): boolean{

    //evaluamos el estado por true o false
    return this.salud >0;
}
}

