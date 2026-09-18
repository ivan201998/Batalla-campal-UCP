import { describe, it, expect } from 'vitest';
import { Escudo } from '../src/Escudo';

describe ("sin escudo no reduce el danio", () => {
    it("sin escudo no reduce el danio", () => {
        expect(new Escudo().aplicar(1)).toBe(1);
    });

    it("con el 50% reduce el danio a la mitad", () =>{
        expect(new Escudo(0.5).aplicar(1)).toBe(0.5);
    })

});

