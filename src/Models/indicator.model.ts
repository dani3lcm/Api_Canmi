import { DataTypes } from "sequelize";
import db from "../Database/connection";
import questions from "./question.model";
import stage from "./stage.model";


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
    evaluation: {
        type: DataTypes.STRING
    }
}, { timestamps: false });


indicators.hasMany(questions, {
    foreignKey: 'indicator_id'
  });
indicators.hasOne(stage, {
    foreignKey: 'stage_id'
  });
export default indicators;