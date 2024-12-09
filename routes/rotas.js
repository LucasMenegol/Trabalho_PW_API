const { Router } = require('express');
const { rotasMarcas } = require('./rotasMarcas');
const { rotasModelos } = require('./rotasModelos');  // Importando as rotas de Modelos
const { login } = require('../controllers/segurancaController');

const rotas = new Router();

// Usando as rotas de marcas e modelos
rotas.use(rotasMarcas);    // Registrando as rotas de Marcas
rotas.use(rotasModelos);   // Registrando as rotas de Modelos

// rota para fazer o login e pegar o JWT
rotas.route("/login")
   .post(login)    

module.exports = rotas;
