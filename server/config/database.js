import Sequelize from "sequelize";

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
const env = process.env.ENV;


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

export default db;