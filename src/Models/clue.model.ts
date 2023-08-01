import { DataTypes } from "sequelize";
import db from "../Database/connection";

const Clues = db.define('clues', {    
    
    entity_key: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    entity_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    key_municipality: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_municipality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clue_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_unit: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { timestamps: false });

export default Clues;