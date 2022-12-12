import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Curso = db.define('cursos', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    imagen: {
        type:DataTypes.STRING
    },
});

export default Curso;