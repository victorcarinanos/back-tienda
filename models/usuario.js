'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Esquema del usuario
var UsuarioSchema = Schema({
	nombre: String,
	email: String,
	pass: String,
	admin: Boolean
});

// Guarda los documentos en la colección Productos, en plural (debería)
module.exports = mongoose.model('usuario', UsuarioSchema);