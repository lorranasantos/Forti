const {Model, DataTypes} = require ("sequelize");

class Pedido extends Model{

    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                produto: DataTypes.STRING,
                quantidade: DataTypes.INTEGER
            },
            {
                tableName: "pedidos",
                sequelize,
            }
        )
    }
    static associate(models){

    }
}
module.exports = Pedido;