class CarritoService{
    URL_CARRITO='/api/carrito/'

    async guardarCarritoService(carrito){
        const carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()