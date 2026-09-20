import { describe, expect, it } from "vitest";
import { Pistola } from '../src/Pistola';

describe('Pistola', () => {
  it('la pistola necesita gastas mas municion que la granada para matar ', () => {
    const pistola = new Pistola();
    expect(pistola.disparar()).toBe(1);
  });

  it("se queda sin balas despues de 6 disparos", ()=>{
    const pistola = new Pistola();
    for (let i = 0; i < 6; i++) {
       pistola.disparar();
    }
    expect(pistola.disparar()).toBe(0);
  });
});