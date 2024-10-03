//const usuariosBD = require("./conexion").usuarios;
//const productosBD = require("./conexion").productos;
const comprasBD = require("./conexion").compras;
const {encriptarPassword, validarPassword, usuarioAutorizado, adminAutorizado} = require("../middlewares/funcionesPassword"); 
//const Producto=require("../modelos/ProdutosModelo");
const Compras=require("../modelos/ComprasModelo");

function validarDatos(compras){
    var valido = false;
    if (compras && compras.FechayHora != undefined && compras.estatus != undefined) {
        valido = true;
    }
    return valido;
}


async function mostrarCompras(){
    const compras = await comprasBD.get();
    comprasValidas = [];
    compras.forEach( compras => {
        const compras1 = new Compras({ id: compras.id,...compras.data()});
        const datosCompra =compras1.getCompras;
        if (validarDatos(datosCompra)){
            comprasValidas.push(datosCompra);
        }
        
    });
   
    return comprasValidas;
    
}



async function buscarPorID(id) {
    const compras = await comprasBD.doc(id).get();
    const compras1=new Compras({id:compras.id,...compras.data()});
    const datosCompra =compras1.getCompras;
    //var comprasValidas;
    if (validarDatos(datosCompra)) {
        //comprasValidas=compras1.getCompras;
        return datosCompra;
    }
    return null;
}


async function nuevaCompra(data) {

    console.log(data);

    const { idUsuario, idProducto} = data; 
    const FechayHora = new Date();
    const compras1 = new Compras({ idUsuario, idProducto, FechayHora, estatus:"vendido" });

    var comprasValidas = false;
    const datosCompra = compras1.getCompras;

    if (validarDatos(datosCompra)) {
        // Firestore generará un ID automáticamente
        await comprasBD.doc().set(datosCompra);
        comprasValidas = true;
    }

    return comprasValidas;
}
   


async function borrarCompra(id) {
    var comprasValidas = await buscarPorID(id);
    var comprasBorradas = false;

    if (comprasValidas) {   
        await comprasBD.doc(id).update({ estatus:"cancelado"});
        comprasBorradas=true;
    }
    return comprasBorradas;
    
}

module.exports={
    mostrarCompras,
    nuevaCompra,
    borrarCompra,
    buscarPorID
}


