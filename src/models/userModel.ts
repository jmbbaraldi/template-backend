import { DataTypes } from "sequelize";
import Sequelize from "../config/database";

const User = Sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users'
}
);

export default User;