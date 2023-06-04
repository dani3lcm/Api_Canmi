import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../Database/connection";
import { StateInterface } from "../Interfaces/state.model.interface";

type StateOptionalCreation = Optional<StateInterface, 'Id'>;

const State:ModelDefined<StateInterface, StateOptionalCreation> = db.define('State', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    State: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Initials: {
        type: DataTypes.INTEGER
    },
    Status: {
        type: DataTypes.BOOLEAN
    }
},{
    tableName: 'state',
    paranoid: true,
});

export default State;