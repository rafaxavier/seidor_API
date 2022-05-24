var motoristas =[];
function MotoristaDAO(){
	// *** estrutura ***
    //id
	//nome
}

// Cadastrar um novo motorista ***
MotoristaDAO.prototype.inserir = function(req, res){
	let dados = req.body;
	let motoristaExist = motoristas.find(element => element.id == dados.id);

	if(motoristaExist){
		return res.status(400).json({ msg: 'Motorista não cadastrado! este id já consta no sistema' });
	}
	
	// só insere os dados se as chaves e valores preenchidos
	if( dados.id != '' && typeof dados.id !== 'undefined' && 
		dados.nome   != '' && typeof dados.nome !== 'undefined'){
		
		motoristas.push(dados);
		res.status(200).json({ msg: 'Motorista cadastrado com sucesso!' });
		
	}else{
		res.status(400).json({ msg: 'Motorista não cadastrado! parametros não preenchidos' });
	}
}

// Atualizar um motorista cadastrado ***
MotoristaDAO.prototype.editarPorID = function(req, res){
	let idAtual = req.params.id;
	let dados = {
		id : req.params.id,
		nome : req.body.nome
	};
	let indice = motoristas.findIndex(element => element.id == idAtual);

	if (indice === -1) {
		return res.status(404).json({ msg:`motorista de ID = ${idAtual} não encontrado`});
	}else{
		if(dados.nome !== ''){
			motoristas.splice(indice,1, dados );
			return res.status(200).json({ msg: `motorista de ID = ${idAtual} atualizado sucesso!!!` });

		}else{
			return res.status(400).json({ msg: 'Parametro nome não passado'});
		}
	}
		
}

// Excluir um motorista cadastrado ***
MotoristaDAO.prototype.deletarPorID = function(req, res){
	let id = req.params.id;
	let motoristaExist = motoristas.find(element => element.id == id);

	if (motoristaExist) {
		motoristas = motoristas.filter(function(i) { 
				return i["id"] !== id; 
			}
		);
		res.status(200).json({ msg: `motorista do ID = ${id} removido com sucesso!!!` });
	}else{
		res.status(404).json({ msg:`motorista do ID = ${id} não encontrado, portanto não pode ser deletado`});
	}
}

// Recuperar um motorista pelo seu id ***
MotoristaDAO.prototype.pegarPorID = function(req, res){
	let id = req.params.id;
	let motorista = motoristas.find(element => element.id == id);

	if(motorista){
		res.status(200).json(motorista);
	}else{
		res.status(404).json({ msg:'motorista não encontrado'});
	}
}

// Listar os motoristas cadastrados ***
MotoristaDAO.prototype.listarTodos = function(req, res){
	if(motoristas != ''){
		res.status(200).json(motoristas);
	}else{
		res.status(404).json({ msg:'Nenhum motorista cadastrado'});
	}
}

// filtrar a listagens dos motoristas  por nome ***
MotoristaDAO.prototype.filtrarPorNome = function(req, res){
	let nome = req.params.nome, 
		arr = [];

	motoristas.forEach(element => {
		if(element.nome == nome){
			arr.push(element);
		}
	});

	if(arr != ''){
		res.status(200).json(arr);
	}else{
		res.status(404).json({ msg:`Nenhum motorista cadastrado com o nome ${nome}`});
	}
}

module.exports = function(){
	return MotoristaDAO;
}