'use strict'

var express = require('express');
var ProductoController = require('../controllers/producto');

var router = express.Router();

// POST
router.post('/guardar-producto', ProductoController.guardarProducto);

// GET
router.get('/producto/:id', ProductoController.getProducto);
router.get('/productos', ProductoController.getProductos);
router.get('/productos-categoria/:cat', ProductoController.getProductoCategoria);
router.get('/productos-destacados', ProductoController.getProductoDestacados);

// PUT
router.put('/modificar-producto/:id', ProductoController.actualizarProducto);

// DELETE
router.delete('/eliminar-producto/:id', ProductoController.eliminarProducto);

module.exports = router;