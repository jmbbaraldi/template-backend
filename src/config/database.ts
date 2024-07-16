import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize (
    process.env.POSTGRES_DB || 'templatedb', 
    process.env.POSTGRES_USER || 'postgres', 
    process.env.POSTGRES_PASSWORD, 
    {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined,
        dialect: 'postgres'
    }
);

export default sequelize;