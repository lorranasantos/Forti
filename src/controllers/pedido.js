const Pedido = require("../models/Pedido");
const { findCreateFind } = require("../models/Pedido");
const { response } = require("express");


module.exports ={
    //função que vai ser executada pela rota
    async listarPedido (req, res){

        var clienteParametro = req.query.cliente
        if(clienteParametro){
            const cliente = await Pedido.findAll({
                where:{
                    cliente:clienteParametro
                }
            })
            return res.status(200).send(cliente)
        }
        try{
            const pedido = await Pedido.findAll();
            res.send(pedido);
        }
        catch(error){
            console.log(error);
            res.status(500).send({error})
        }  
    },

    async adicionarPedido(req, res){  
        const {cliente, produto, quantidade} = req.body;

        try{

            let pedido = Pedido.findOne({
                where: {quantidade}
            })    
            if(quantidade > 1)
                res.status(400).send({erro: "Quantidade de produtos excedida!"});

            pedido = await Pedido.create({cliente, produto, quantidade});
        
            res.status(201).send("foi");
        }
        catch(error){
            // console.log("erro");
            res.status(400).send("");
        }
    },
}
