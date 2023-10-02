const express = require('express');
const router = express.Router();
const aranhaController = require('../controllers/aranhaController');

// Rota para testar
router.get('/', (req, res) => {
    aranhaController.testar(req, res);
});

// Rota para enviar resultados ao banco com um parâmetro de ID de usuário
router.post('/resultadoAoBanco/:idUsuario', (req, res) => {
    aranhaController.resultadoAoBanco(req, res);
});

// Rota para listar algo (assumindo que é uma listagem de dados)
router.get('/listar', (req, res) => {
    aranhaController.listar(req, res);
});

module.exports = router;
