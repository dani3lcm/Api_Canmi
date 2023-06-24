import { DataTypes } from "sequelize";
import db from "../Database/connection";

const Federative_entities = db.define('clues', {    
    entity_key: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    entity_name: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { timestamps: false });

export default Federative_entities;