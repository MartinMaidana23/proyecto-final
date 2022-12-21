class ProductosBuscadorController extends ProductoBuscador {
    constructor(){
        
        super()
    }

    async buscarProducto(nombre){
        let prodBuscado
        await productoBuscadorService.buscarProductos(nombre)
            .then((result)=>{
                this.producto = result
            })
            .catch(error=>console.log(error))
        console.log(prodBuscado);
    }
}

const productoBuscadorController = new ProductosBuscadorController()