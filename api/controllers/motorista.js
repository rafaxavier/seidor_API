const Motorista = require('../models/MotoristaDAO')();

// Cadastrar um novo motorista
module.exports.insert = function( req, res){
    let motorista = new Motorista();
    motorista.inserir(req, res);	
}

// Atualizar um motorista cadastrado
module.exports.update = function( req, res){
    let motorista = new Motorista();
    motorista.editarPorID(req, res);	
}

// Excluir um motorista cadastrado
module.exports.delete = function( req, res){
    let motorista = new Motorista();
    motorista.deletarPorID(req, res);	
}

// Recuperar um motorista pelo seu id
module.exports.show = function( req, res){
    let motorista = new Motorista();
    motorista.pegarPorID(req, res);	
}

// Listar os motorista cadastrados.
module.exports.listarMotoristas = function(req, res){
    let motorista = new Motorista();
    motorista.listarTodos(req, res);
}

//filtrar a listagem dos motorista por nome
module.exports.listarPorNome = function(req, res){
    let motorista = new Motorista();
    motorista.filtrarPorNome(req, res);
}


