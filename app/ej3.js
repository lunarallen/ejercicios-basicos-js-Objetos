const producto = {
    precio: 1000,
    descuento: 0.10,
    neto: function(){
        const descuento = (this.precio - (this.precio * this.descuento));
        console.log(`El precio final es ${descuento}`)

    }
}

producto.neto();