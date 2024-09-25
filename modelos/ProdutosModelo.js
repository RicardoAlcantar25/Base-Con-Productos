class Producto {
    constructor(data){
        
        this.id=data.id;
        this.nombre=data.nombre;
        this.descripcion=data.descripcion;
        this.precio=data.precio;
      
    }

    set id(id){
        this._id=id;
    }

    set nombre(nombre){
        const nombreRegex=/^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)){
            this._nombre=nombre;
        }
    }

    set descripcion(descripcion){
        var regexDescripcion = /^.{1,200}$/;
        if(regexDescripcion.test(descripcion)){
            this._descripcion=descripcion;
        }
    }

    set precio(precio){
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if(regexPrecio.test(precio)){
            this._precio=precio;
        }
    }


    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    get precio(){
        return this._precio;
    }


    get getProducto(){
        const conid={
            id:this.id,
            nombre:this.nombre,
            descripcion:this.descripcion,
            precio:this.precio
        }

        const sinid={
            nombre:this.nombre,
            descripcion:this.descripcion,
            precio:this.precio
        }

        if (this.id==undefined) {
            return sinid;
        }
        else {
            return conid;
        }
    }
}

module.exports=Producto;