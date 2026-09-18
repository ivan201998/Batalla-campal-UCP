//con la creacion del test soldado es lo mismo para tanque
//con la creacion del test de tanque agregamos mas cosas
import { describe, it, expect } from 'vitest';
import { Buque } from '../src/Buque';
import { Escudo } from '../src/Escudo';

describe("buque", () =>{
    it("empieza vivo", ()=> {
        expect(new Buque().estaVivo()).toBe(true);
    });

    it("resistir un disparo", ()=> {
        const buque = new Buque();
        buque.recibirDisparo();
        expect(buque.estaVivo()).toBe(true);

    });

    it("muere al segundo disparo", ()=> {
        const buque = new Buque();
        buque.recibirDisparo();
        buque.recibirDisparo();
        expect(buque.estaVivo()).toBe(true);

    });

    it("muere al tercer disparo", ()=> {
        const buque = new Buque();
        buque.recibirDisparo();
        buque.recibirDisparo();
        buque.recibirDisparo();
        expect(buque.estaVivo()).toBe(false);

    });
    
    it("un disparo mata a otro tanque", ()=>{
        const b1 = new Buque();
        const b2 = new Buque();

        expect(b2.estaVivo()).toBe(true);//antes

        b1.disparar(b2);
        b1.disparar(b2);
        b1.disparar(b2);

        expect(b2.estaVivo()).toBe(false);//despues
        expect(b1.estaVivo()).toBe(true);//el que dispara no se afecta a si mismo

    });
    
})

it("con el escudo 50% necesita 4 disparos para morir", ()=>{
    const buque = new Buque(new Escudo(0.5));
    buque.recibirDisparo();
    buque.recibirDisparo();
    buque.recibirDisparo();
    buque.recibirDisparo();
    buque.recibirDisparo();
    expect(buque.estaVivo()).toBe(true);
    buque.recibirDisparo();
    expect(buque.estaVivo()).toBe(false);
})
//disparos necesarios = vida ÷ daño por disparo, donde daño por disparo
//3 ÷ 0.5 = 6

//expect(lo que obtuve).toBe(lo que espera)
