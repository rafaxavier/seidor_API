const Veiculo = require('../models/AutomovelDAO')();

// Cadastrar um novo automóvel
module.exports.insert = function( req, res){
    let veiculo = new Veiculo();
    veiculo.inserirVeiculo(req, res);	
}

// Atualizar um automóvel cadastrado
module.exports.update = function( req, res){
    let veiculo = new Veiculo();
    veiculo.editarPorPlaca(req, res);	
}

// Excluir um automóvel cadastrado
module.exports.delete = function( req, res){
    let veiculo = new Veiculo();
    veiculo.deletarPorPlaca(req, res);	
}

// Recuperar um automóvel pelo seu id
module.exports.show = function( req, res){
    let veiculo = new Veiculo();
    veiculo.pegarPorPlaca(req, res);	
}

// Listar os automóveis cadastrados.
module.exports.listarVeiculos = function(req, res){
    let veiculo = new Veiculo();
    veiculo.listarTodos(req, res);
}

//filtrar a listagem dos automóveis por cor 
module.exports.listarPorCor = function(req, res){
    let veiculo = new Veiculo();
    veiculo.filtrarPorCor(req, res);
}

//filtrar a listagem dos automóveis por marca
module.exports.listarPorMarca = function(req, res){
    let veiculo = new Veiculo();
    veiculo.filtrarPorMarca(req, res);
}


