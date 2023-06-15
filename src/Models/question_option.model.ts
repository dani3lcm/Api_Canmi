import { DataTypes } from "sequelize";
import db from "../Database/connection";

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

export default Question_options;