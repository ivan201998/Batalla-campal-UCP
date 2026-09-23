import { describe, it, expect } from 'vitest';
import { EscudoRyD } from '../src/EscudoRyD';

describe ("Escudo", () => {
   it("sin escudo no protege disparo", ()=>{
        var escudo = new EscudoRyD();

        expect(escudo.usarEscudo()).toBe(0);
   });

   it("el escudo protege segun su resistencia", ()=>{
    
    //1 de resistencia y 3 de durabilidad
    var escudo = new EscudoRyD(1,3);

        expect(escudo.usarEscudo()).toBe(1);

   });

   it("despues de usar el escudo la proteccion queda en 0", ()=>{
        var escudo = new EscudoRyD(1,3);
        
        // Primera vez.
        expect(escudo.usarEscudo()).toBe(1);

        // Segunda vez.
        expect(escudo.usarEscudo()).toBe(1);

        // Tercera vez.
        expect(escudo.usarEscudo()).toBe(1);

        // Ya se gastaron los 3 usos.
        expect(escudo.usarEscudo()).toBe(0);
   });

});

