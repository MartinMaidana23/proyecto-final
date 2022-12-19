const express = require('express')
const controller = require('../controller/carrito')
const controllerPago = require('../controller/pago')
const routerCarrito = express.Router()

/* POST para agregar producto al carrito */
routerCarrito.post('/', controller.guardarCarrito)

routerCarrito.get('/feedback', controllerPago.feedBack)

module.exports = routerCarrito