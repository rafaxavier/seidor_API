const motorista = require('../controllers/motorista');

module.exports = function(application){
	//Rotas inerentes ao CRUD do motorista
	application.route('/motoristas/:id?')
	.post(function(req, res) {
		motorista.insert(req, res);	
	})
	.put(function(req, res) {
		motorista.update(req, res);
	})
	.delete(function(req, res) {
		motorista.delete(req, res);
	})
	.get(function(req, res) {
		motorista.show(req, res);	
	});	
	

	// Listar os motoristas cadastrados. 
	application.get('/listar-motoristas', function(req, res){
		motorista.listarMotoristas(req, res);	
	});

	//filtrar a listagem
	application.get('/motoristas/nome/:nome?', function(req, res){
		motorista.listarPorNome(req, res);	
	});
}