// string,number y boolean
let aNumber: number = 1;
const aString: string ='This is a string';
let aBoolean: boolean = true;
let anotherBoolean = false;

//old javascript style
let variable:any;
variable = true;
variable = '1234';

//enum
enum Colores{
    Rojo,
    Verde,
    Azul
}
let color: Colores = Colores.Rojo;
console.log(color);

//arrays
const arrayNumeros: number[] = [1,2,3,4];

function suma(a: number,b:number):number{
    return a+b;
}
function sumaJS(a:any, b:any):any{
    return a+b;
}
//funcion anonima
const suma2 = function(a:number,b:number):number{
    return a+b;
}
//funciones flecha - arrow function
const suma3 = (a:number,b:number):number =>{
    return a+b;
}
const suma4 = (a:number,b:number):number => a+b;

//interface
enum TipoOperacion{
    Debito,
    Credito
}
interface ITransaccion{
    id: number,
    cuenta: number,
    fecha: string,
    operacion: TipoOperacion,
    monto: number
}
const transaccion:ITransaccion = {
    id:123,
    cuenta: 2000,
    fecha:'2021-11-12',
    operacion: TipoOperacion.Credito,
    monto: 100.01
}

transaccion.operacion = TipoOperacion.Debito;

class Cuenta{
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

    constructor(public id:number,public cuit:string,
        public saldo:number,public transacciones:ITransaccion[]){}

    agregarTransaccion(transaccion:ITransaccion){
        if(transaccion.operacion=== TipoOperacion.Debito){
            this.saldo = this.saldo - transaccion.monto;
        }
        else{
            this.saldo = this.saldo + transaccion.monto;
        }
        this.transacciones.push(transaccion);
    }

}

const cuenta = new Cuenta(1,'31-12341231-4',100,[]);
cuenta.agregarTransaccion({id:11,cuenta:1,fecha:'2021-8-4',operacion: TipoOperacion.Debito,monto:100});
console.log(cuenta);