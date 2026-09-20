import { describe, it, expect } from 'vitest';
import { Granada } from '../src/Granada';

describe('granada', () => {
  it('lanzar hace 1 de daño', () => {
    const granada = new Granada();
    expect(granada.lanzar()).toBe(3);

  });

  it("se queda sin granadas despues de 3", ()=>{
    const granada = new Granada();
    for (let i = 0; i < 3; i++) {
       granada.lanzar();
    }
    expect(granada.lanzar()).toBe(0);
  });
});