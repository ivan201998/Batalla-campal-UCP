import { describe, it, expect } from 'vitest';
import { Soldado } from '../src/Soldado';
import { Escudo } from '../src/Escudo';

describe("Soldado", () =>{
    it("empieza vivo", ()=> {
        expect(new Soldado().estaVivo()).toBe(true);
    });

    it("muere al recibir un disparo", ()=> {
        const soldado = new Soldado();
        soldado.recibirDisparo();
        expect(soldado.estaVivo()).toBe(false);

    });

    it("un disparo mata a otro solado", ()=>{
        const s1 = new Soldado();
        const s2 = new Soldado();

        expect(s2.estaVivo()).toBe(true);//antes

        s1.disparar(s2);

        expect(s2.estaVivo()).toBe(false);//despues
        expect(s1.estaVivo()).toBe(true);//el que dispara no se afecta a si mismo

    });
})

//expect(lo que obtuve).toBe(lo que espera)

