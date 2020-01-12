'use stricti'

const uri = 'mongodb://user_db:D6MWofI9PqAQ9d60@cluster0-shard-00-00-gei8b.mongodb.net:27017,cluster0-shard-00-01-gei8b.mongodb.net:27017,cluster0-shard-00-02-gei8b.mongodb.net:27017/db_tienda?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

var app = require('./app');
var port = 3700;

// Conexión con la base de datos
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useMongoClient: true })
.then(() => {
	console.log('Conexión ok');
	app.listen(port, () =>{
		console.log('Servidor corriendo en el puerto 3700');
	});
})
.catch(err => console.log(err));
