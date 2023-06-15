import { DataTypes } from "sequelize";
import db from "../Database/connection";
import questions from "./question.model";

const Question_options = db.define('question_options', {
    question_option_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    question_id: {
        type: DataTypes.INTEGER,
        //primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    option_value: {
        type: DataTypes.STRING
    }
}, { timestamps: false });

questions.hasMany(Question_options, {
    foreignKey: 'question_id'
  });


export default Question_options;