import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const hostName = process.env.DB_HOST!;
const userName = process.env.DB_USER!;
const password = process.env.DB_PASSWORD!;
const database = process.env.DB_DB!;
const dialect = 'postgres';

const db = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
});

export default db;