import { DataTypes } from "sequelize";
import db from "../Database/connection";


const Clinic = db.define('Clinic', {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IdCity: {
        type: DataTypes.INTEGER
    },
    IdMunicipality: {
        type: DataTypes.INTEGER
    },
    Status: {
        type: DataTypes.BOOLEAN        
    }
});

export default Clinic;