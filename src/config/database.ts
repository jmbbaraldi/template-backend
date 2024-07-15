import { Sequelize } from "sequelize";

const sequelize = new Sequelize (
    'templatedb', 
    'postgres', 
    'postgres', 
    {
        host: 'localhost', 
        dialect: 'postgres'
    }
);

export default sequelize;