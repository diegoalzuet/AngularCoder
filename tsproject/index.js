"use strict";
// string,number y boolean
let aNumber = 1;
const aString = 'This is a string';
let aBoolean = true;
let anotherBoolean = false;
//old javascript style
let variable;
variable = true;
variable = '1234';
//enum
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Verde"] = 1] = "Verde";
    Colores[Colores["Azul"] = 2] = "Azul";
})(Colores || (Colores = {}));
let color = Colores.Rojo;
console.log(color);
//arrays
const arrayNumeros = [1, 2, 3, 4];
function suma(a, b) {
    return a + b;
}
function sumaJS(a, b) {
    return a + b;
}
//funcion anonima
const suma2 = function (a, b) {
    return a + b;
};
//funciones flecha - arrow function
const suma3 = (a, b) => {
    return a + b;
};
const suma4 = (a, b) => a + b;
//interface
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Debito"] = 0] = "Debito";
    TipoOperacion[TipoOperacion["Credito"] = 1] = "Credito";
})(TipoOperacion || (TipoOperacion = {}));
const transaccion = {
    id: 123,
    cuenta: 2000,
    fecha: '2021-11-12',
    operacion: TipoOperacion.Credito,
    monto: 100.01
};
transaccion.operacion = TipoOperacion.Debito;
class Cuenta {
    // id:number;
    // cuit:string;
    // saldo: number;
    // transacciones: ITransaccion[];
    // constructor(id:number, cuit:string, saldo: number, transacciones: ITransaccion[]){
    //     this.id=id;
    //     this.cuit = cuit;
    //     this.saldo = saldo;
    //     this.transacciones = transacciones;
    // }
    constructor(id, cuit, saldo, transacciones) {
        this.id = id;
        this.cuit = cuit;
        this.saldo = saldo;
        this.transacciones = transacciones;
    }
    agregarTransaccion(transaccion) {
        if (transaccion.operacion === TipoOperacion.Debito) {
            this.saldo = this.saldo - transaccion.monto;
        }
        else {
            this.saldo = this.saldo + transaccion.monto;
        }
        this.transacciones.push(transaccion);
    }
}
const cuenta = new Cuenta(1, '31-12341231-4', 100, []);
cuenta.agregarTransaccion({ id: 11, cuenta: 1, fecha: '2021-8-4', operacion: TipoOperacion.Debito, monto: 100 });
console.log(cuenta);
