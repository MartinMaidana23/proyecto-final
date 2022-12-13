const service = require('../services/productos')

const getProductos = async (req,res)=>{

    try {
        let id = req.params.id

        if (id) {
            const producto = await service.obtenerProducto(id)
            return res.status(200).json(producto)
        } else {
            const productos = await service.obtenerProductos()
            return res.status(200).json(productos)
        }
    } catch (error) {
        console.log('Error en getProductos', error);
    }
}
const guardarProducto = async (req,res)=>{
    try {
        const producto = req.body 
        const prodGuardado = await service.guardarProducto(producto)
        res.status(201).json(prodGuardado)
    } catch (error) {
        console.log('Error guardando producto', error);
    }
}
const actualizarProducto = async (req,res)=>{
    try {
        const {id} = req.params
        const producto = req.body

        const prodActualizado = await service.actualizarProducto(id, producto)
        res.status(200).json({prodActualizado})
    } catch (error) {
        console.log(`Error update: ${error}`);
    }
}
const borrarProducto = async (req,res)=>{
    const {id} = req.params

    if (!id) {
        return res.status(400).json('No pusiste el id perro')
    }

    const prodBorrado = await service.borrarProducto(id)
    res.status(200).json(prodBorrado)
}

module.exports = {
    getProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}