const { Router } = require('express');
const { getModelos, addModelo, updateModelo, deleteModelo, getModeloPorCodigo } = require('../controllers/modeloController');

    const { verificaJWT } = require('../controllers/segurancaController')

const rotasModelos = new Router();

// Definindo as rotas para modelos
rotasModelos.route('/modelo')
    .get(verificaJWT, getModelos)    // Rota para pegar todos os modelos
    .post(verificaJWT, addModelo)    // Rota para adicionar um novo modelo
    .put(verificaJWT, updateModelo); // Rota para atualizar um modelo existente

// Rota para deletar um modelo por código
rotasModelos.route('/modelo/:codigo')
    .delete(verificaJWT, deleteModelo)
    .get(verificaJWT, getModeloPorCodigo);

module.exports = { rotasModelos };
