export class Granada {
     constructor(private municion: number = 3, private readonly danio: number = 3) {}
 
         lanzar(): number {
            const danioDisparado = this.municion > 0? this.danio: 0;
            this.municion  = Math.max(0, this.municion  -1)
            return danioDisparado;
    }
}
