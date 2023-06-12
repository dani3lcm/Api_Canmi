import { DataTypes } from "sequelize";
import db from "../Database/connection";


const indicators = db.define('indicators', {
    indicator_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stage_id: {
        type: DataTypes.INTEGER
    },
    key: {
        type: DataTypes.STRING
    },
    target: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN        
    },
    created_at: {
        type: DataTypes.DATE        
    },
    updated_at: {
        type: DataTypes.DATE        
    }
}, { timestamps: false });

export default indicators;