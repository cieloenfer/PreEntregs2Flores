class Compra {
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerTotal(){
        if(this.carrito.lenght > 0){
            return this.carrito.reduce
            {(acc, servicio)=> acc + prenda.precio, 0}
        }
    }
}