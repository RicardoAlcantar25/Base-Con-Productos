class Compra {
    constructor(data){
        
        this.id=data.id;
        this.idProducto=data.idProducto;
        this.idUsuario=data.idUsuario;
        this.FechayHora=data.FechayHora;
        this.estatus=data.estatus;
      
    }

    set id(id){
        this._id=id;
    }

    set idProducto(idProducto){
        this._idProducto=idProducto;
    }

    set  idUsuario(idUsuario){
        this._idUsuario=idUsuario;
    }


    //set nombre(nombre){
     //   const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
    //    if (nombreRegex.test(nombre)){
     //       this._nombre=nombre;
      //  }
    //}

    set FechayHora(FechayHora){
        var regexFechayHora = /^.{1,200}$/;
        if(regexFechayHora.test(FechayHora)){
            this._FechayHora=FechayHora;
        }
    }

    set estatus(estatus){
        var regexestatus = /^.{1,200}$/;
        if(regexestatus.test(estatus)){
            this._estatus=estatus;
        }
    }




  //  set precio(precio){
     //   var regexPrecio = /^\d+(\.\d{1,2})?$/;
     //   if(regexPrecio.test(precio)){
     //       this._precio=precio;
       // }
    //}


    get id(){
        return this._id;
    }

    get idProducto(){
        return this._idProducto;
    }

    get idUsuario(){
        return this._idUsuario;
    }

    get FechayHora(){
        return this._FechayHora;
    }

    get estatus(){
        return this._estatus;
    }


    get getCompras() {
        return {
            idProducto: this.idProducto,
            idUsuario: this.idUsuario,
            FechayHora: this.FechayHora,
            estatus: this.estatus
        };
    }

      //  const sinid={
         //   nombre:this.nombre,
        //    descripcion:this.descripcion,
        //    precio:this.precio
       // }

       // if (this.id==undefined) {
  //          return sinid;
      //  }
       // else {
        //    return conid;
        //}
    }


module.exports=Compra;