const sequelize = require("sequelize");
const dbconfig = require("../config/database");

const Pedido = require("../models/Pedido");
const {Sequelize} = require("sequelize");

const conexao = new Sequelize(dbconfig);

Pedido.init(conexao);

Pedido.associate(conexao.models);