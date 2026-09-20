export class Granada {
     constructor(private municion: number = 3, private readonly danio: number = 1) {}

     private getMunicion(): number {
        return this.municion;
     }

     private setMunicion(valor: number): void {
        this.municion = valor;
     }

     lanzar(): number {
        const danioDisparado = this.getMunicion() > 0 ? this.danio : 0;
        this.setMunicion(this.getMunicion() > 0 ? this.getMunicion() - 1 : 0);
        return danioDisparado;
     }
}