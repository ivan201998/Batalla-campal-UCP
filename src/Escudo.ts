export class Escudo {
    constructor(private readonly reduccion: number = 0){}
        aplicar (danio: number): number {
            return danio * (1 - this.reduccion)
        }
}