'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var router = express.Router();

// POST
router.post('/guardar-usuario', UsuarioController.guardarUsuario);
router.post('/login', UsuarioController.loginUsuario);

// GET
router.get('/usuarios', UsuarioController.getUsuarios);

module.exports = router;