var registros =[];
const Automovel = require ('../models/AutomovelDAO')();

function UtilizacaoDAO(){
	// *** estrutura ***
	//id
    // dataStart
	// dataEnd

	// motorista
	// 	-id_motorista

	// Automóvel
	//	-placa
	

	// Motivo de utilização
}

UtilizacaoDAO.prototype.utilizar = function(req, res){
	let dados = req.body;
	let automoveis = new Automovel();
	let registroExist = registros.find(element => element.placa == dados.placa);
	let veiculoExist =  automoveis.existe(dados.placa);

	if(registroExist && registroExist.dataEnd === null){
		return res.status(400).json({ msg: 'veiculo não utilizado! esta placa já consta no sistema e está em uso' });
	}

	if(veiculoExist == 0){
		return res.status(404).json({ msg: 'veiculo não existe' });
	}

	// só insere os dados se as chaves e valores preenchidos
	if( dados.placa != '' && typeof dados.placa !== 'undefined' && 
		dados.id_motorista   != '' && typeof dados.id_motorista !== 'undefined' && 
		dados.motivo != '' && typeof dados.motivo !== 'undefined'){

		// gerando id aleatorio 
		dados.id = Math.floor(Date.now() * Math.random()).toString(36);
		
		// data que foi pego
		dados.dataStart = Date.now();
		// data que foi devolvido

		dados.dataEnd = null;
		registros.push(dados);
		res.status(200).json({ msg: 'veiculo utilizado com sucesso!' });

	}else{
		res.status(400).json({ msg: 'veiculo não utilizado! parametros não preenchidos' });
	}	

}

UtilizacaoDAO.prototype.devolverVeiculo = function(req, res){
	let placaAtual = req.params.placa;
	
	let indice = registros.findIndex(element => element.placa == placaAtual);
	let veiculoExist = registros.find(element => element.placa == placaAtual);
	
	veiculoExist.dataEnd = Date.now();

	/*só atualiza se a placa passada no params for == a passado no body ou se nao 
	houver mais veiculo com essa placa passada no body*/
	if (indice !== -1) {
		try {
			registros.splice(indice,1, veiculoExist );
			res.status(200).json({ msg: `Automóvel da placa ${placaAtual} devolvido sucesso!!!` });
		} catch (error) {
			return res.status(400).send({ msg: 'Erro ao devolver automóvel'});
		}
		
	}else{
		res.status(404).json({ msg:`Automóvel de placa ${placaAtual} não encontrado`});
	}

}

UtilizacaoDAO.prototype.listarRegistros = function(req, res){
	if(registros.length > 0){
		return res.status(200).json(registros);
	}else{
		return res.status(400).json({msg: "vazio"});
	}
	
}


module.exports = function(){
	return UtilizacaoDAO;
}