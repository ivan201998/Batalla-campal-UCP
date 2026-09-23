import { describe, it, expect } from 'vitest';
import { Soldado } from '../src/Soldado';
import { Escudo } from '../src/Escudo';
import { EscudoRyD } from '../src/EscudoRyD';

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

    it("el escudo protege un disparo de otro soldado", () => {

        var s1 = new Soldado();
        var s2 = new Soldado();

        // Le damos protección 1 solamente a s2.
        s2.ponerEscudo(new Escudo(1));

        expect(s2.estaVivo()).toBe(true);

        // Primer disparo: escudo 1 -> 0.
        s1.disparar(s2);

        expect(s2.estaVivo()).toBe(true);

        // Segundo disparo: ya no tiene protección.
        s1.disparar(s2);

        expect(s2.estaVivo()).toBe(false);

    });

    it("el escudo incorpora resistencia y durabilidad", () => {

    var s1 = new Soldado();
    var s2 = new Soldado();

    s2.ponerEscudoRyD(new EscudoRyD(1, 3, 2));

    expect(s2.estaVivo()).toBe(true);

    // Primer disparo.
    s1.dispararRyD(s2);

    expect(s2.estaVivo()).toBe(true);

    // Segundo disparo.
    s1.dispararRyD(s2);

    expect(s2.estaVivo()).toBe(true);

    // Tercer disparo.
    s1.dispararRyD(s2);

    expect(s2.estaVivo()).toBe(true);

    // Cuarto disparo.
    s1.dispararRyD(s2);

    expect(s2.estaVivo()).toBe(false);

});
})


//expect(lo que obtuve).toBe(lo que espera)