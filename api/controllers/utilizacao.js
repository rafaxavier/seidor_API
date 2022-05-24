/*
	Utilização de um automóvel
	ADD *o Criar um registro que represente a utilização de um automóvel por um
	motorista, com uma data de início e um texto do motivo de utilização.
	UPDATE *o Finalizar a utilização de um automóvel por um motorista guardando a data de
	finalização
	GET *o Listar os registros de utilização cadastrados

	DADOS Utilização
	o Data de início da utilização
	o Data de término da utilização
	o Motorista que utilizou
	o Automóvel utilizado
	o Motivo de utilização
*/

const Utilizacao = require('../models/UtilizacaoDAO')();

module.exports.utilizarVeiculo = function( req, res){
    let utilizacao = new Utilizacao();

	utilizacao.utilizar(req, res);
}

module.exports.devolverVeiculo = function( req, res){
    let utilizacao = new Utilizacao();

    utilizacao.devolverVeiculo(req, res);
}

module.exports.listarRegistros = function( req, res){
    let utilizacao = new Utilizacao();

    utilizacao.listarRegistros(req, res);
}