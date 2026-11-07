import database from "../config/database.js";
class partida {
    constructor() {
        this.model = database.db.define("jogo", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            data: {
                type: database.db.Sequelize.DATE,
                allowNull: false
            },

            vencedor: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            }
        })
    }
}

export default new partida ().model
