const express = require('express');
const cors = require('cors');  // CORS para permitir requisições de diferentes origens
const rotas = require('./routes/rotas');  // Importa as rotas da API

// Cria o servidor Express
const app = express();

// Configurações do servidor
app.use(express.json());  // Para tratar requisições com corpo JSON
app.use(express.urlencoded({ extended: false }));  // Para tratar requisições com dados de formulário
app.use(cors());  // Habilita CORS

// Usa as rotas definidas em rotas.js
app.use(rotas);

// Define a porta do servidor
app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor da API rodando.....')
})
