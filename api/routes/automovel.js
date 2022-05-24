const veiculo = require('../controllers/automovel');

module.exports = function(application){
	//Rotas inerentes ao CRUD do automovel
	application.route('/automoveis/:placa?')
	.post(function(req, res) {
		veiculo.insert(req, res);	
	})
	.put(function(req, res) {
		veiculo.update(req, res);
	})
	.delete(function(req, res) {
		veiculo.delete(req, res);
	})
	.get(function(req, res) {
		veiculo.show(req, res);	
	});	
	
	// Listar todos cadastrados
	application.get('/listar-automoveis', function(req, res){
		veiculo.listarVeiculos(req, res);	
	});

	// filtros
	application.get('/automoveis/cor/:cor?', function(req, res){
		veiculo.listarPorCor(req, res);	
	});

	application.get('/automoveis/marca/:marca?', function(req, res){
		veiculo.listarPorMarca(req, res);	
	});
}