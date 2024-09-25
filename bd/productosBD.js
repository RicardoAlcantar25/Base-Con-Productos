const usuariosBD = require("./conexion").usuarios;
const productosBD = require("./conexion").productos;
const {encriptarPassword, validarPassword, usuarioAutorizado, adminAutorizado} = require("../middlewares/funcionesPassword"); 
const Producto=require("../modelos/ProdutosModelo");

function validarDatos(producto){
    var valido = false;
    if (producto.nombre != undefined && producto.descripcion != undefined && producto.precio != undefined) {
        valido = true;
    }
    return valido;
}


async function mostrarProductos(){
    const productos = await productosBD.get();
    //console.log(usuarios.id);
    productosValidos = [];
    productos.forEach( producto => {
        const producto1 = new Producto({ id: producto.id,...producto.data()});
        if (validarDatos(producto1.getProducto)){
            productosValidos.push(producto1.getProducto);
        }
        
    });
    // console.log(usuariosValidos);
    return productosValidos;
    
}

// mostrarUsuarios();


async function buscarPorID(id) {
    const producto = await productosBD.doc(id).get();
    const producto1=new Producto({id:producto.id,...producto.data()});
    var productoValido;
    if (validarDatos(producto1.getProducto)) {
        productoValido=producto1.getProducto;
    }
    //console.log(usuarioValido);
    return productoValido;
}



//buscarPorID("6UCKH0nCyIjQrCsyZrJ4");

async function nuevoProducto(data) {
    console.log(data);
    
  
    const producto1=new Producto(data);
    //console.log(usuario1.getUsuario);
    var productoValido=false;
    if (validarDatos(producto1.getProducto)) {
        await productosBD.doc().set(producto1.getProducto);
        productoValido=true;
    }
    return productoValido;
}
   


async function borrarProducto(id) {
    var productoValido = await buscarPorID(id);
    var productoBorrado = false;
    if (productoValido) {
        await productosBD.doc(id).delete();
        productoBorrado=true;
    }
    return productoBorrado;
    
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarPorID
}


