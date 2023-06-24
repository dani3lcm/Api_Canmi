import { Model, Sequelize } from "sequelize";
import BaseRepository from "../Abstracts/base.repository";
import Federative_entities from "../Models/federative_entity.model";

class FederativeEntityRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Federative_entities;      
    }

    async getFederativeEntities() {        
        try {        
            const federative_entities = await Federative_entities.findAll({
                attributes:[                    
                    [Sequelize.fn('DISTINCT', Sequelize.col('entity_key')) ,'entity_key'],
                    'entity_name'
                ],
                order:[
                    ['entity_key', 'ASC']
                ]
            });
            console.log('federative_entities:::', federative_entities);
            return federative_entities;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getFederativeEntity(entity_key:any) {        
        try {           
            const federative_entity = await Federative_entities.findByPk(entity_key);
            console.log('federative_entity:::', federative_entity);
            return federative_entity;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async restoreFederativeEntity(entity_key:any) {
        let data = {};
        try {            
            const federativeEntity = await this.model.findByPk(entity_key, { paranoid: false });  
            if(!federativeEntity){
                // En caso de que no exista
            }else{
                await federativeEntity.restore();
                data = federativeEntity;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default FederativeEntityRepository;