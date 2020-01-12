'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Esquema del producto
var ProductoSchema = Schema({
	nombre: String,
	descripcion: String,
	imagen: String,
	precio: Number,
	categoria: String,
	destacado: Boolean,
	activo: Boolean
});

// Guarda los documentos en la colección Productos, en plural (debería)
module.exports = mongoose.model('producto', ProductoSchema);