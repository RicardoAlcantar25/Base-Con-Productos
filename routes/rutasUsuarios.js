var rutas = require("express").Router();
var {mostrarUsuarios,nuevoUsuario,validarDatos,borrarUsuario,mostrarUsuarios,buscarPorID} = require("../bd/usuariosBD");
const {encriptarPass,validarPass,usuarioAutorizado,adminAutorizado} = require("../middlewares/funcionesPassword")


rutas.get("/",async (req,res) =>{
    var usuarisValidos = await mostrarUsuarios(); 
    res.json(usuarisValidos);
});

rutas.get("/buscarUsuarioPorId/:id", async(req,res) => {
    var usuarioValido = await buscarPorID(req.params.id)
    res.json(usuarioValido);
    
});

rutas.get("/borrarUsuario/:id", async(req,res) => {
    var usuarioBBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBBorrado);
});

rutas.post("/nuevoUsuario", async (req,res) => {
    var usuarioValido = await nuevoUsuario(req.body);
    console.log(usuarioValido);
    res.json(usuarioValido);
})


module.exports = rutas;