const carrito= []
const servicios = 
[{codigo:1,tipo:"Mediacion Familiar",precio:$100000},
 {codigo:2,tipo:"Mediacion Laboral",precio:$90000},
 {codigo:3,tipo:"Mediacion Escolar",precio:$90000},
 {codigo:4,tipo:"Asesoramiento legal a copropiedades",precio:$200000},
 {codigo:5,tipo:"Actualización legal según nueva ley de copropiedad",precio:$200000}]

function ElegirServicio(codigo) {
    let resultado = servicios.find ((servicio)=> servicios.codigo === parseInt (codigo))
    return resultado
}

function finalizarCompra() {
    //const contratar = new contratoServicio(carrito)
    // console.log(contratar.obtenersubtotal())
    let codigo 
    prompt ("Ingresa el codigo del servicio que deseas contratar.(1,2,3,4,5)")
    let serivicioElegido = buscarServicios(codigo)
    if(serivicioElegido !== undefined){
        carrito.push(serivicioElegido)
        alert( + serivicioElegido, tipo + "se agregó al carrito.")
        let respuesta = confirm("¿Deseas agregar otro servicio")
        if(respuesta === true){
            comprar()
        }else{
            finalizarCompra()
        }
        
    }else{
        alert("error en el código ingresado, prueba de nuevo")
    }
}
//código after
function finalizarCompra() {
    const contratar = new contratoServicio(carrito)
    alert("el costo total de tu compra es $" + contratar.obtenerSubTotal()+ "Muchas gracias por su preferencia")
    let respuesta = confirm("¿Desesas agregar otro servicio?" )
}

function comprar(){
    let codigo 
    prompt ("Ingresa el codigo del servicio que deseas contratar.(1,2,3,4,5)")
    let serivicioElegido = buscarServicios(codigo)
    if(serivicioElegido !== undefined){
        carrito.push(serivicioElegido)
        alert("El" + serivicioElegido.servicio + "se agregó al carrito")
        let respuesta = confirm("¿Deseas agregar otro servicio")
        if(respuesta === true){
         comprar()
        }else{
            finalizarCompra()
        }   
     }else{
        alert("Error en el código ingresado. Intenta de nuevo")
     }
    }