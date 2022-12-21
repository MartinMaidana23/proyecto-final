class Buscador{
    input = null
    form = null
    prodBuscado = []

    constructor(){
        this.input = document.querySelector('#busqueda')
        this.form = document.querySelector('header form')

        this.productos = this.input.addEventListener('input', (e)=>{
            e.preventDefault()

            const nombre = this.leerProductoIngresado()
            this.prodBuscado = productoBuscadorController.buscarProducto(nombre)
            console.log(this.prodBuscado);
        })

    }

    leerProductoIngresado(){
        return this.input.value.toLowerCase()
    }


}

async function renderBuscador(productos) {
    const container = document.getElementsByClassName('cards-container')[0]
    console.log(productos);

    try {
        const respuesta = await fetch('templates/buscador.hbs')
        const plantillaHbs = await respuesta.text()
        const template = Handlebars.compile(plantillaHbs)

        const html = template({productos})
        container.innerHTML = html
    } catch (error) {
        console.log(error);
    }
}

const initBuscador = ()=>{
    console.log('Init buscador()');

    renderBuscador(productoBuscadorController.producto)

}

const buscador = new Buscador()