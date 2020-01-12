'use strict'

var Usuario = require('../models/usuario');

var controller = {		
	/*
	 * Crea un nuevo usuario en la base de datos
	 */
	guardarUsuario: function(req, res){
		var usuario = new Usuario();
		
		var params = req.body;
		usuario.nombre = params.nombre;
		usuario.email = params.email;
		usuario.pass = params.pass;
		usuario.admin = params.admin;
		
		usuario.save((err, usuarioStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar'});
		
			if(!usuarioStored) return res.status(404).send({message: 'No se ha podido guardar el usuario'});
			
			return res.status(200).send({usuario: usuarioStored});
		});
	},
	
	/*
	 * Recupera todos los usuarios en base de datos
	 */
	getUsuarios: function(req, res){
		Usuario.find({}).exec((err, usuarios) => {
			if(err) return res.status(500).send({message: 'Error al listar los usuarios'});
		
			if(!usuarios) return res.status(404).send({message: 'No hay usuarios'});
			
			return res.status(200).send({usuarios: usuarios});
		});
	},
	
	/*
	 * Verifica las credenciales del usuario y devuelve un usuario en caso de que las dos sean correctas
	 */
	loginUsuario: function(req, res){
		var params = req.body;
		
		Usuario.find({'email': params.email, 'pass': params.pass}).exec((err, usuario) => {
			if(err) return res.status(500).send({message: 'Error al hacer login'});
		
			if(!usuario) return res.status(404).send({message: 'No hay usuario con esos datos'});
			
			return res.status(200).send({usuario: usuario});
		});
	},
};

module.exports = controller;