const express = require('express')
const routerProductosBuscador = express.Router()
const controller = require('../controller/productos')

routerProductosBuscador.get('/:nombre?', controller.leerProducto)

module.exports = routerProductosBuscador