enum Moneda {
    USD,
    ARS,
    EUR,
}
enum TipoOperacion {
    Extraccion,
    Deposito,
    Transferencia,
}
interface IOperacion {
    id: number,
    cuenta: number,
    fecha: string,
    operacion: TipoOperacion,
    moneda: Moneda,
    monto: number,
}
class Cajero {    
    constructor(public id: number, public ubicacion: string,
        public montoDisponibleUSD: number,
        public montoDisponibleARS: number,
        public montoDisponibleEUR: number,
        public operaciones: IOperacion[]) { };

    realizarDeposito(deposito: IOperacion) {
        switch (deposito.moneda) {
            case Moneda.ARS:
                this.montoDisponibleARS+=deposito.monto;
                this.operaciones.push(deposito);
                break;
            case Moneda.EUR:
                this.montoDisponibleEUR+=deposito.monto;
                this.operaciones.push(deposito);
                break;
            case Moneda.USD:
                this.montoDisponibleUSD+=deposito.monto;
                this.operaciones.push(deposito);
                break;
        }
    }
    realizarExtraccion(extraccion: IOperacion) {
        switch (extraccion.moneda) {
            case Moneda.ARS:
                if(this.montoDisponibleARS>=extraccion.monto){
                    this.montoDisponibleARS-=extraccion.monto;
                    this.operaciones.push(extraccion);                   
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;
            case Moneda.EUR:
                if(this.montoDisponibleEUR>=extraccion.monto){
                    this.montoDisponibleEUR-=extraccion.monto;
                    this.operaciones.push(extraccion);                   
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;               
            case Moneda.USD:
                if(this.montoDisponibleUSD>=extraccion.monto){
                    this.montoDisponibleUSD-=extraccion.monto;
                    this.operaciones.push(extraccion);                   
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;
        }
    }   
}

const cajero = new Cajero(1,'Corrientes 321,Buenos Aires',10000,2000,1500,[]);
const deposito = {
    id: 1,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Deposito,
    moneda: Moneda.ARS,
    monto: 100,
}
const extraccion = {
    id: 2,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Extraccion,
    moneda: Moneda.USD,
    monto: 200,
}
const tranferencia = {
    id: 2,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Transferencia,
    moneda: Moneda.EUR,
    monto: 20000,
}

console.log(cajero);
console.log('======================');
cajero.realizarDeposito(deposito);
cajero.realizarExtraccion(extraccion);
cajero.realizarExtraccion(tranferencia);
console.log('======================');
console.log(cajero);