const { json } = require('express')
const fs = require('fs')

class ProductoModelFile{
    nombreArchivo = 'productos.json'

    async leerArchivoProductos(){
        try {
            try {
                let productos = await JSON.parse(await fs.promises.readFile(this.nombreArchivo, 'UTF-8'))
                return productos
            } catch (error) {
                console.log('Error en leerArchivo', error);
                let productos = []
                return productos
            }
        } catch (error) {
            
        }
    }

    getId(productos){
        return productos.length ? (productos[productos.length - 1].id + 1) : 1
    }

    async guardarArchivoProductos(productos){
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, '\t'))
    }

    async createProducto(producto){
        let productos = await this.leerArchivoProductos()

        producto.id = this.getId(productos)
        productos.push(producto)

        await this.guardarArchivoProductos(productos)
        return producto
    }

    async readProductos(){
        let productos = await this.leerArchivoProductos()
        return productos
    }

    async readProducto(id){
        const productos = await this.leerArchivoProductos()

        const producto = productos.find(prod=>prod.id==id) || {}
        return producto
    }

    async deleteProducto(id){
        const productos = await this.leerArchivoProductos()

        const index = productos.findIndex(prod=>prod.id==id)
        const producto = productos.splice(index,1)[0]

        return producto
    }

    async updateProducto(id,producto){
        const productos = await this.leerArchivoProductos()

        productos.id = id
        const index = productos.findIndex(prod=>prod.id == id)
        productos.splice(index,1,producto)

        await this.guardarArchivoProductos(productos)
        return producto
    }
}

module.exports = ProductoModelFile