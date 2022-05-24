const utilizacao = require('../controllers/utilizacao');

module.exports = function(application){
	application.post('/utilizar', function(req, res){
		utilizacao.utilizarVeiculo(req, res);	
	});

	application.put('/devolver/:placa?', function(req, res){
		utilizacao.devolverVeiculo(req, res);	
	});

	application.get('/registros', function(req, res){
		utilizacao.listarRegistros(req, res);	
	});

}


// *** estrutura ***
	//id
    // dataStart
	// dataEnd

	// motorista
	// 	-id_motorista

	// Automóvel
	//	-placa
	
	// Motivo de utilização