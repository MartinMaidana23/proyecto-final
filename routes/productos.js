const express = require('express')
const routerProductos = express.Router()
const controller = require('../controller/productos')

/* Get all/one */
routerProductos.get('/:id?', controller.getProductos)

/* POST */
routerProductos.post('/', controller.guardarProducto)

/* EDIT */
routerProductos.put('/:id', controller.actualizarProducto)

/* DELETE */
routerProductos.delete('/:id', controller.borrarProducto)

module.exports = routerProductos
