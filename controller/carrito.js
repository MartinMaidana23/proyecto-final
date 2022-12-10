const service = require('../services/carrito')
const mercadopago = require('mercadopago')

const guardarCarrito = async (req,res)=>{
    try {
        const carrito = req.body
        const carritoGuardado = await service.guardarCarrito(carrito)
        res.status(201).json(carritoGuardado)

        let items = []
        for(let item of carritoGuardado) {
            items.push(
                {
                    title: item.nombre,
                    unit_price: Number(item.precio),
                    quantity: Number(item.cantidad),
                }
            )
        }

        let preference = {
            items: items,
            back_urls: {
                "success": "http://localhost:8080/api/carrito/feedback",
                "failure": "http://localhost:8080/api/carrito/feedback",
                "pending": "http://localhost:8080/api/carrito/feedback"
            },
            auto_return: "approved",
        };

        mercadopago.preferences.create(preference)
            .then(function (response) {
                res.json({
                    id: response.body.id, items
                });
            }).catch(function (error) {
                console.log(error);
            });
    
        //res.status(201).json(carritoGuardado)
    }
    catch (error) {
        console.log('Error al guardar el carrito', error);
    }
}
module.exports = {
    guardarCarrito
}