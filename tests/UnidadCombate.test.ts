import { describe, it, expect } from 'vitest';
import { Soldado } from '../src/Soldado';
import { Tanque } from '../src/Tanque';
import { Buque } from '../src/Buque';


describe("combate entre distintos personajes", ()=>{
    //desde la mirada de soldado
    it("un soldado necesita 2 disparos para matar un tanque", ()=>{
        const soldado = new Soldado();
        const tanque = new Tanque();

        soldado.disparar(tanque);
        expect(tanque.estaVivo()).toBe(true);

        soldado.disparar(tanque);
        expect(tanque.estaVivo()).toBe(false);

    });

    it("un soldado necesita 3 disparos para matar un buque", ()=>{
        const soldado = new Soldado();
        const buque = new Buque();

        soldado.disparar(buque);
        soldado.disparar(buque);
        expect(buque.estaVivo()).toBe(true);

        soldado.disparar(buque);
        expect(buque.estaVivo()).toBe(false);
    }); 

    //desde la mirada de tanque
    it("un tanque puede matar de 1 disparo a un soldado",()=>{
        const tanque = new Tanque();
        const soldado = new Soldado();

        expect(tanque.estaVivo()).toBe(true);
        expect(soldado.estaVivo()).toBe(true)
        
        tanque.disparar(soldado);
        expect(soldado.estaVivo()).toBe(false)

    });

    it("un tanque necesita de 3 disparos a un buque", ()=>{
        const tanque = new Tanque();
        const buque = new Buque();

        expect(tanque.estaVivo()).toBe(true);
        expect(buque.estaVivo()).toBe(true)
        
        tanque.disparar(buque);
        tanque.disparar(buque);
        tanque.disparar(buque);
        expect(buque.estaVivo()).toBe(false)
    });
    //desde la mirada de buque
    it("un buque necesita 1 disparo para el soldado",()=>{
        const buque = new Buque();
        const soldado = new Soldado();

        expect(buque.estaVivo()).toBe(true);
        expect(soldado.estaVivo()).toBe(true)

        buque.disparar(soldado);
        expect(soldado.estaVivo()).toBe(false)

    });

    it("un buque necesita 2 disparo para el tanque",()=>{
        const buque = new Buque();
        const tanque = new Tanque();

        expect(buque.estaVivo()).toBe(true);
        expect(tanque.estaVivo()).toBe(true)

        buque.disparar(tanque);
        buque.disparar(tanque);
        expect(tanque.estaVivo()).toBe(false)

    });

});