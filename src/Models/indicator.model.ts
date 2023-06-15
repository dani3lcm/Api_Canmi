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
    }
}, { timestamps: false });

const questions = db.define('questions', {
    question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type_question_id: {
        type: DataTypes.INTEGER
    }
}, { timestamps: false });

indicators.hasMany(questions, {
    foreignKey: 'indicator_id'
  });

export default indicators;