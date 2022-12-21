class ProductoBuscadorService{
    URL_PRODUCTOS_BUSQUEDA = '/api/productosBuscador/'


    async buscarProductos(nombre){
        const productos = await http.get(this.URL_PRODUCTOS_BUSQUEDA, nombre)
        return productos
    }
}

const productoBuscadorService = new ProductoBuscadorService()