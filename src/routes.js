const express = require("express");

const pedidoController = require("./controllers/pedido");

const routes = express.Router();

// adicionar pedido
routes.post("/pedido", pedidoController.adicionarPedido);
// Listar pedido
routes.get("/pedido", pedidoController.listarPedido);

module.exports = routes;


