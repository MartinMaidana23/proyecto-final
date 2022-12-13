const mongoose = require('mongoose')

//Schema doc carrito

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// modelo doc almacenado

const CarritoModel = mongoose.model('carritos', carritoSchema)

class CarritoModelMongoDB {
    async createCarrito(carrito){
        try {
            const carritoSave = new CarritoModel({carrito})
            await carritoSave.save()
            return carrito
        } catch (error) {
            console.log('Error en create carrito', error);
            return {}
        }
    }
}

module.exports = CarritoModelMongoDB