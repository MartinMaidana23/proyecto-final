const CarritoModel = require("../models/carrito");

const model = CarritoModel.get(process.env.PERSISTENCIA || 'MONGODB' || 'FILE')

const guardarCarrito = async carrito => {
    const carritoGuardado = await model.createCarrito(carrito)
    return carritoGuardado
}

module.exports = {
    guardarCarrito
}