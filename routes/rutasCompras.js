var rutas = require("express").Router();

//var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorID} = require("../bd/productosBD");
var {mostrarCompras,nuevaCompra,borrarCompra,buscarPorID} = require("../bd/comprasBD");
const {encriptarPass,validarPass,usuarioAutorizado,adminAutorizado} = require("../middlewares/funcionesPassword")


rutas.get("/mostrarCompras",async (req,res) =>{;
    var comprasValidas = await mostrarCompras();

    res.json(comprasValidas);
});

rutas.get("/buscarCompraPorId/:id", async(req,res) => {
    var comprasValidas = await buscarPorID(req.params.id)
    res.json(comprasValidas);
    
});

rutas.get("/borrarCompra/:id", async(req,res) => {
    var comprasBorradas = await borrarCompra(req.params.id);
    res.json(comprasBorradas);
});

rutas.post("/nuevaCompra", async (req,res) => {
    var comprasValidas = await nuevaCompra(req.body);
    console.log(comprasValidas);
    res.json(comprasValidas);
});


module.exports = rutas;