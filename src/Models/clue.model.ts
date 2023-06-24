import { DataTypes } from "sequelize";
import db from "../Database/connection";

const Clues = db.define('clues', {    
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