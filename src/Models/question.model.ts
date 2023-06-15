import { DataTypes } from "sequelize";
import db from "../Database/connection";

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
    },
    indicator_id: {
        type: DataTypes.INTEGER
    }
}, { timestamps: false });

const Question_options = db.define('question_options', {
    question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_value: {
        type: DataTypes.STRING
    }
}, { timestamps: false });

questions.belongsTo(Question_options, {
    foreignKey: 'question_id'
  });


export default questions;