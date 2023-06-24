import { DataTypes } from "sequelize";
import db from "../Database/connection";

const stage = db.define('stages', {
    stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { timestamps: false });

export default stage;