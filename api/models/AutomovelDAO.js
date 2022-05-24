var automoveis =[];

function AutomovelDAO(){
	// *** estrutura ***
    //placa
	//cor
	//marca
}


// Cadastrar um novo automóvel
AutomovelDAO.prototype.inserirVeiculo = function(req, res){
	let dados = req.body;
	let veiculoExist = automoveis.find(element => element.placa == dados.placa);

	if(veiculoExist){
		return res.status(400).json({ msg: 'Automóvel não cadastrado! esta placa já consta no sistema' });
	}

	// só insere os dados se as chaves e valores preenchidos
	if( dados.placa != '' && typeof dados.placa !== 'undefined' && 
		dados.cor   != '' && typeof dados.cor !== 'undefined' && 
		dados.marca != '' && typeof dados.marca !== 'undefined'){
			
		automoveis.push(dados);
		res.status(200).json({ msg: 'Automóvel cadastrado com sucesso!' });

	}else{
		res.status(400).json({ msg: 'Automóvel não cadastrado! parametros não preenchidos' });
	}
}

// Atualizar um automóvel cadastrado
AutomovelDAO.prototype.editarPorPlaca = function(req, res){
	let placaAtual = req.params.placa;
	let dados = req.body;
	let indice = automoveis.findIndex(element => element.placa == placaAtual);
	let veiculoExist = automoveis.find(element => element.placa == dados.placa);

	/*só atualiza se a placa passada no params for == a passado no body ou se nao 
	houver mais veiculo com essa placa passada no body*/
	if (indice !== -1) {
		if(placaAtual == dados.placa || typeof veiculoExist == 'undefined'){
			try {
				automoveis.splice(indice,1, dados );
				res.status(200).json({ msg: `Automóvel da placa ${placaAtual} atualizado sucesso!!!` });
			} catch (error) {
				return res.status(400).send({ msg: 'Erro ao atualizar automóvel'});
			}
		}else{
			return res.status(400).send({ msg: `Erro ao atualizar automóvel, já existe um registro com a placa: ${veiculoExist.placa}`});
		}
		
	}else{
		res.status(404).json({ msg:`Automóvel de placa ${placaAtual} não encontrado`});
	}
}

// Excluir um automóvel cadastrado
AutomovelDAO.prototype.deletarPorPlaca = function(req, res){
	let placa = req.params.placa;
	let veiculoExist = automoveis.find(element => element.placa == placa);

	if (veiculoExist) {
		automoveis = automoveis.filter(function(i) { 
				return i["placa"] !== placa; 
			}
		);
		res.status(200).json({ msg: `Automóvel da placa ${placa} removido com sucesso!!!` });
	}else{
		res.status(404).json({ msg:`Automóvel de placa ${placa} não encontrado, portanto não pode ser deletado`});
	}
}

// Recuperar um automóvel pelo seu id 
AutomovelDAO.prototype.pegarPorPlaca = function(req, res){
	const placa = req.params.placa === undefined ? req.body.placa : req.params.placa ;

	let veiculo = automoveis.find(element => element.placa == placa);

	if(veiculo){
		return res.status(200).json(veiculo);
	}else{
		return res.status(404).json({ msg:'Automóvel não encontrado'});
	}
}

// Listar os automóveis cadastrados.
AutomovelDAO.prototype.listarTodos = function(req, res){
	if(automoveis.length > 0){
		return res.status(200).json(automoveis);
	}else{
		return res.status(400).json({ msg:'Nenhum automóvel cadastrado'});
	}
}

// filtrar a listagens dos automóveis
AutomovelDAO.prototype.filtrarPorCor = function(req, res){
	let cor = req.params.cor, 
		arr = [];

	automoveis.forEach(element => {
		if(element.cor == cor){
			arr.push(element);
		}
	});

	if(arr != ''){
		res.status(200).json(arr);
	}else{
		res.status(404).json({ msg:`Nenhum automóvel cadastrado com a cor ${cor}`});
	}
}

AutomovelDAO.prototype.filtrarPorMarca = function(req, res){
	let marca = req.params.marca,  
		arr = [];

	automoveis.forEach(element => {
		if(element.marca == marca){
			arr.push(element);
		}
	});
	
	if(arr != ''){
		res.status(200).json(arr);
	}else{
		res.status(404).json({ msg:`Nenhum automóvel cadastrado com a marca ${marca}`});
	}
}


// disponibilidade
AutomovelDAO.prototype.existe = function(placa){
	let veiculo = automoveis.find(element => element.placa == placa);

	if(veiculo){
		return 1;
	}else{
		return 0;
	}
}


module.exports = function(){
	return AutomovelDAO;
}