var rutas = require("express").Router();

var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorID} = require("../bd/productosBD");
const {encriptarPass,validarPass,usuarioAutorizado,adminAutorizado} = require("../middlewares/funcionesPassword")


rutas.get("/mostrarProductos",async (req,res) =>{;
    var productosValidos = await mostrarProductos();

    res.json(productosValidos);
});

rutas.get("/buscarProductoPorId/:id", async(req,res) => {
    var productoValido = await buscarPorID(req.params.id)
    res.json(productoValido);
    
});

rutas.get("/borrarProducto/:id", async(req,res) => {
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto", async (req,res) => {
    var productoValido = await nuevoProducto(req.body);
    console.log(productoValido);
    res.json(productoValido);
});


module.exports = rutas;