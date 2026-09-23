import { describe, it, expect } from 'vitest';
import { Escudo } from '../src/Escudo';

describe ("Escudo", () => {
   it("sin escudo no protege disparo", ()=>{
        var escudo = new Escudo();

        expect(escudo.usarEscudo()).toBe(0);
   });

   it("con escudo protege disparo", ()=>{
        var escudo = new Escudo(1);

        expect(escudo.usarEscudo()).toBe(1);

   });

   it("despues de usar el escudo la proteccion queda en 0", ()=>{
        var escudo = new Escudo(1);

        expect(escudo.usarEscudo()).toBe(1);

        expect(escudo.usarEscudo()).toBe(0);
   });

});

