import {test, expect} from "vitest";
import { Soldado } from "../src/Soldado";


test("un Soldado dispara a otro Soldado", () => {
    //creamos el Soldado que dispara
    //salud 100
    //ataque 100
    var soldado1 = new Soldado(100,100);

    //creamos el Soldado que recive el disparo
    var soldado2 = new Soldado(100,100);

    //Soldado dispara al Soldado
    //soldado1.Disparar(soldado2);

    //validamos la salud del Soldado baje 100 a 0
    //expect(soldado2.salud).toBe(0);
    //get o set

    /*
    var s1 = new soldado()
    var s2 = new soldado() 
    probar antes antes el true y false
    s1.disparar(s2)
    validar s2.estavivo()
    */
    
    //ya no esta vivo
    //expect(soldado2.Estadovivo()).toBe(false);
})