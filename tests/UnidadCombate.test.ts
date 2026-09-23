import { describe, it, expect } from 'vitest';
import { Soldado } from '../src/Soldado';
import { Tanque } from '../src/Tanque';
import { Buque } from '../src/Buque';
import { Pistola } from '../src/Pistola';


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
    
    //ataque con pistola
    it ("un soldado con pistola mata a 1 tanque con 2 disparo", ()=>{
        const soldado = new Soldado();
        const tanque = new Tanque();
        const pistola = new Pistola();

        // objetivo=tanque, arma=pistola
        soldado.dispararArma(tanque, pistola);// le dispara a tanque, usando pistola
        soldado.dispararArma(tanque, pistola);// segundo disparo con la misma pistola (ya con menos balas)

        expect(tanque.estaVivo()).toBe(false);  
    });

    it("si la pistola se queda sin balas, no logra matar al tanque", () => {
        const pistola = new Pistola(1); // una sola bala, no alcanza para las 2 vidas del tanque
        const soldado = new Soldado();
        const tanque = new Tanque();

        soldado.dispararArma(tanque, pistola); // gasta la única bala, tanque queda con 1 vida
        soldado.dispararArma(tanque, pistola); // ya sin municion, no hace daño

        expect(tanque.estaVivo()).toBe(true); // sigue vivo, nunca llegó a morir
    });

});