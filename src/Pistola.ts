export class Pistola {
     constructor(private municion: number = 6, private readonly danio: number = 1) {}
 
         disparar(): number {
            const danioDisparado = this.municion > 0? this.danio: 0;
            this.municion  = Math.max(0, this.municion  -1)
            return danioDisparado;
    }
}

