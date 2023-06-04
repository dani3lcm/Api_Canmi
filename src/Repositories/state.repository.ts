import { Model } from "sequelize";
import State from "../Models/state.model";
import BaseRepository from "../Abstracts/base.repository";

class StateRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = State;
    }

    async getStates() {        
        try {
            const states = await State.findAll();
            console.log('states:::', states);
            return states;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getState(Id:any) {        
        try {           
            const state = await State.findByPk(Id);
            console.log('state:::', state);
            return state;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createState(State:any) {
        let data = {};
        try {
            //State.createdAt = new Date().toISOString();
            console.log('Repository_createState');
            console.log(State);
            data = await this.model.create(State);            
        } catch(err) {
            //logger.error('Error::' + err);
            console.log(err);
        }
        return data;
    }

    async updateState(Id:any, State:any) {
        let data = {};
        try {
            const state = await this.model.findByPk(Id);
            if(!state){
                // En caso de que no exista
            }else{
                data = await state.update(State);
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
    }

    async deleteState(Id:any) {
        let data = {};
        try {
            data = await State.destroy({
                where: {
                    Id: Id
                }
            });
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }

    async restoreState(Id:any) {
        let data = {};
        try {            
            const state = await this.model.findByPk(Id, { paranoid: false });  
            if(!state){
                // En caso de que no exista
            }else{
                await state.restore();
                data = state;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default StateRepository;