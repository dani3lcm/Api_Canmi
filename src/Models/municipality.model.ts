import { DataTypes } from "sequelize";
import db from "../Database/connection";

const Municipalities = db.define('clues', {    
    key_municipality: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_municipality: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { timestamps: false });

export default Municipalities;