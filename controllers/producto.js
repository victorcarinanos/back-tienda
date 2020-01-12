'use strict'

var Producto = require('../models/producto');

var controller = {		
	/*
	 * Crea un nuevo producto en la base de datos
	 */
	guardarProducto: function(req, res){
		var producto = new Producto();
		
		var params = req.body;
		producto.nombre = params.nombre;
		producto.descripcion = params.descripcion;
		producto.imagen = params.imagen;
		producto.precio = params.precio;
		producto.categoria = params.categoria;
		producto.destacado = params.destacado;
		producto.activo = params.activo;
		
		producto.save((err, productoStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar'});
		
			if(!productoStored) return res.status(404).send({message: 'No se ha podido guardar el producto'});
			
			return res.status(200).send({producto: productoStored});
		});
	},
	
	/*
	 * Recupera un producto
	 */
	getProducto: function(req, res){
		var producto = new Producto();
		
		// Recuperamos la categoria a recuperar los productos
		var productoId = req.params.id;
		
		Producto.find({'_id': productoId}).exec((err, producto) => {
			if(err) return res.status(500).send({message: 'Error al listar los productos'});
		
			if(!producto) return res.status(404).send({message: 'No hay productos'});
			
			return res.status(200).send({producto: producto});
		});
	},
	
	/*
	 * Recupera todos los productos en base de datos
	 */
	getProductos: function(req, res){
		Producto.find({}).exec((err, productos) => {
			if(err) return res.status(500).send({message: 'Error al listar los productos'});
		
			if(!productos) return res.status(404).send({message: 'No hay productos'});
			
			return res.status(200).send({productos: productos});
		});
	},
	
	/*
	 * Listar productos de una categoria
	 */
	getProductoCategoria: function(req, res){
		var producto = new Producto();
		
		// Recuperamos la categoria a recuperar los productos
		var categoria = req.params.cat;
		
		Producto.find({'categoria': categoria}).exec((err, productos) => {
			if(err) return res.status(500).send({message: 'Error al listar los productos'});
		
			if(!productos) return res.status(404).send({message: 'No hay productos'});
			
			return res.status(200).send({productos: productos});
		});
	},
	
	/*
	 * Listar productos destacados para la home
	 */
	getProductoDestacados: function(req, res){
		var producto = new Producto();
		
		Producto.find({'destacado': true}).limit(5).exec((err, productos) => {
			if(err) return res.status(500).send({message: 'Error al listar los productos'});
		
			if(!productos) return res.status(404).send({message: 'No hay productos'});
			
			return res.status(200).send({productos: productos});
		});
	},
	
	/*
	 * Actualiza la información de un producto
	 */
	actualizarProducto: function(req, res){
		var productoId = req.params.id;
		var update = req.body;
		
		Producto.findByIdAndUpdate(productoId, update, {new: true}, (err, productoActualizado) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});
		
			if(!productoActualizado) return res.status(404).send({message: 'No existe el producto'});
			
			return res.status(200).send({producto: productoActualizado});
		});
	},
	
	/*
	 * Eliminamos un producto de la base de datos
	 */
	eliminarProducto: function(req, res){
		var productoId = req.params.id;
		
		Producto.findByIdAndRemove(productoId, (err, productoBorrado) => {
			if(err) return res.status(500).send({message: 'Error al eliminar el producto'});
		
			if(!productoBorrado) return res.status(404).send({message: 'No existe el producto'});
			
			return res.status(200).send({producto: productoBorrado});
		});
	}
};

module.exports = controller;