import { Model } from "sequelize";
import Indicator from "../Models/indicator.model";
import BaseRepository from "../Abstracts/base.repository";

class IndicatorRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Indicator;
    }

    async getIndicators() {        
        try {
            const indicators = await Indicator.findAll();
            console.log('indicators:::', indicators);
            return indicators;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getIndicator(indicator_id:any) {        
        try {           
            const indicator = await Indicator.findByPk(indicator_id);
            console.log('indicator:::', indicator);
            return indicator;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    // async createState(State:any) {
    //     let data = {};
    //     try {
    //         //State.createdAt = new Date().toISOString();
    //         console.log('Repository_createState');
    //         console.log(State);
    //         data = await this.model.create(State);            
    //     } catch(err) {
    //         //logger.error('Error::' + err);
    //         console.log(err);
    //     }
    //     return data;
    // }

    // async updateState(Id:any, State:any) {
    //     let data = {};
    //     try {
    //         const state = await this.model.findByPk(Id);
    //         if(!state){
    //             // En caso de que no exista
    //         }else{
    //             data = await state.update(State);
    //         }
    //         return data;
    //     } catch(err) {
    //         //logger.error('Error::' + err);
    //     }
    //     return data;
    // }

    // async deleteState(Id:any) {
    //     let data = {};
    //     try {
    //         data = await State.destroy({
    //             where: {
    //                 Id: Id
    //             }
    //         });
    //         return data;
    //     } catch(err) {
    //         //logger.error('Error::' + err);
    //     }
    //     return data;
    //     //return {status: `${data.deletedCount > 0 ? true : false}`};
    // }

    async restoreIndicator(Id:any) {
        let data = {};
        try {            
            const indicator = await this.model.findByPk(Id, { paranoid: false });  
            if(!indicator){
                // En caso de que no exista
            }else{
                await indicator.restore();
                data = indicator;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default IndicatorRepository;