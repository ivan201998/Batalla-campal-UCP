//con la creacion del test soldado es lo mismo para tanque
import { describe, it, expect } from 'vitest';
import { Tanque } from '../src/Tanque';
import { Escudo } from '../src/Escudo';

describe("tanque", () =>{
    it("empieza vivo", ()=> {
        expect(new Tanque().estaVivo()).toBe(true);
    });

    it("resistir un disparo", ()=> {
        const tanque = new Tanque();
        tanque.recibirDisparo();
        expect(tanque.estaVivo()).toBe(true);

    });

    it("muere al segundo disparo", ()=> {
        const tanque = new Tanque();
        tanque.recibirDisparo();
        tanque.recibirDisparo();
        expect(tanque.estaVivo()).toBe(false);

    });
    
    it("un disparo mata a otro tanque", ()=>{
        const t1 = new Tanque();
        const t2 = new Tanque();

        expect(t2.estaVivo()).toBe(true);//antes

        t1.disparar(t2);
        t1.disparar(t2);

        expect(t2.estaVivo()).toBe(false);//despues
        expect(t1.estaVivo()).toBe(true);//el que dispara no se afecta a si mismo

    });
    
})

it("con el escudo 50% necesita 4 disparos para morir", ()=>{
    const tanque = new Tanque(new Escudo(0.5));
    tanque.recibirDisparo();
    tanque.recibirDisparo();
    tanque.recibirDisparo();
    expect(tanque.estaVivo()).toBe(true);
    tanque.recibirDisparo();
    expect(tanque.estaVivo()).toBe(false);
})
//disparos necesarios = vida ÷ daño por disparo, donde daño por disparo
//2 ÷ 0.5 = 4

//expect(lo que obtuve).toBe(lo que espera)

