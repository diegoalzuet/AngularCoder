var Moneda;
(function (Moneda) {
    Moneda[Moneda["USD"] = 0] = "USD";
    Moneda[Moneda["ARS"] = 1] = "ARS";
    Moneda[Moneda["EUR"] = 2] = "EUR";
})(Moneda || (Moneda = {}));
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Extraccion"] = 0] = "Extraccion";
    TipoOperacion[TipoOperacion["Deposito"] = 1] = "Deposito";
    TipoOperacion[TipoOperacion["Transferencia"] = 2] = "Transferencia";
})(TipoOperacion || (TipoOperacion = {}));
var Cajero = /** @class */ (function () {
    function Cajero(id, ubicacion, montoDisponibleUSD, montoDisponibleARS, montoDisponibleEUR, operaciones) {
        this.id = id;
        this.ubicacion = ubicacion;
        this.montoDisponibleUSD = montoDisponibleUSD;
        this.montoDisponibleARS = montoDisponibleARS;
        this.montoDisponibleEUR = montoDisponibleEUR;
        this.operaciones = operaciones;
    }
    ;
    Cajero.prototype.realizarDeposito = function (deposito) {
        switch (deposito.moneda) {
            case Moneda.ARS:
                this.montoDisponibleARS += deposito.monto;
                this.operaciones.push(deposito);
                break;
            case Moneda.EUR:
                this.montoDisponibleEUR += deposito.monto;
                this.operaciones.push(deposito);
                break;
            case Moneda.USD:
                this.montoDisponibleUSD += deposito.monto;
                this.operaciones.push(deposito);
                break;
        }
    };
    Cajero.prototype.realizarExtraccion = function (extraccion) {
        switch (extraccion.moneda) {
            case Moneda.ARS:
                if (this.montoDisponibleARS >= extraccion.monto) {
                    this.montoDisponibleARS -= extraccion.monto;
                    this.operaciones.push(extraccion);
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;
            case Moneda.EUR:
                if (this.montoDisponibleEUR >= extraccion.monto) {
                    this.montoDisponibleEUR -= extraccion.monto;
                    this.operaciones.push(extraccion);
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;
            case Moneda.USD:
                if (this.montoDisponibleUSD >= extraccion.monto) {
                    this.montoDisponibleUSD -= extraccion.monto;
                    this.operaciones.push(extraccion);
                }
                else
                    console.log('La cantidad solicitada no esta disponible');
                break;
        }
    };
    return Cajero;
}());
var cajero = new Cajero(1, 'Corrientes 321,Buenos Aires', 10000, 2000, 1500, []);
var deposito = {
    id: 1,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Deposito,
    moneda: Moneda.ARS,
    monto: 100
};
var extraccion = {
    id: 2,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Extraccion,
    moneda: Moneda.USD,
    monto: 200
};
var tranferencia = {
    id: 2,
    cuenta: 1,
    fecha: '19-11-2021',
    operacion: TipoOperacion.Transferencia,
    moneda: Moneda.EUR,
    monto: 20000
};
console.log(cajero);
console.log('======================');
cajero.realizarDeposito(deposito);
cajero.realizarExtraccion(extraccion);
cajero.realizarExtraccion(tranferencia);
console.log('======================');
console.log(cajero);
