const ProductoModel = require("../models/productos");
const ProductoValidation = require("../utils/producto.validation");


const model = ProductoModel.get(process.env.PERSISTENCIA || 'MONGODB' || 'FILE')

const obtenerProducto = async id =>{
    let producto = await model.readProducto(id)
    return producto
}

const obtenerProductos = async () =>{
    let productos = await model.readProductos()
    return productos
}

const leerProducto = async (name)=>{
    const producto = await model.findProducto(name)
    return producto
}

const guardarProducto = async (producto) => {
    const errorValidacion =  ProductoValidation.validar(producto)

    if (!errorValidacion) {
        const prodGuardado = await model.createProducto(producto)
        return prodGuardado
    }else {

        console.log('error en guardar producto', errorValidacion.details[0].message);
    }
    
}

const borrarProducto = async (id) => {
    const prodEliminado = await model.deleteProducto(id)
    return prodEliminado
}

const actualizarProducto = async (id, producto) =>{
    const errorValidacion = ProductoValidation.validar(producto)

    if (!errorValidacion) {
        const prodActualizado =  await model.updateProducto(id, producto)
        return prodActualizado
    } else{

        console.log('error al actualizar', errorValidacion.details[0].message);
        return {}
    }
    
}

module.exports = {
    obtenerProducto,
    obtenerProductos,
    guardarProducto,
    borrarProducto,
    actualizarProducto,
    leerProducto
}