const { Router } = require('express');
const { getMarcas, addMarca, updateMarca, deleteMarca, getMarcaPorCodigo } = require('../controllers/marcaController');

    const { verificaJWT } = require('../controllers/segurancaController')

const rotasMarcas = new Router();

// Definindo as rotas para marcas
rotasMarcas.route('/marca')
    .get(verificaJWT, getMarcas)    // Rota para pegar todas as marcas
    .post(verificaJWT, addMarca)    // Rota para adicionar uma nova marca
    .put(verificaJWT, updateMarca); // Rota para atualizar uma marca existente

// Rota para deletar uma marca por código
rotasMarcas.route('/marca/:codigo')
    .delete(verificaJWT, deleteMarca)
    .get(verificaJWT, getMarcaPorCodigo)   // Rota para pegar uma marca específica pelo código


module.exports = { rotasMarcas };
