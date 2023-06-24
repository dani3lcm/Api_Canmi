import { Model, Sequelize } from "sequelize";
import BaseRepository from "../Abstracts/base.repository";
import Municipalities from "../Models/municipality.model";

class MunicipalityRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Municipalities;      
    }

    async getMunicipalities() {        
        try {        
            const municipalities = await Municipalities.findAll({
                attributes:[                    
                    [Sequelize.fn('DISTINCT', Sequelize.col('key_municipality')) ,'key_municipality'],
                    'name_municipality'
                ],
                order:[
                    ['key_municipality', 'ASC']
                ]
            });
            console.log('municipalities:::', municipalities);
            return municipalities;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getMunicipality(entity_key:any) {        
        try {           
            const municipality = await Municipalities.findAll({
                attributes:[                    
                    [Sequelize.fn('DISTINCT', Sequelize.col('key_municipality')) ,'key_municipality'],
                    'name_municipality'
                ],
                where: { entity_key: entity_key },
                order:[
                    ['key_municipality', 'ASC']
                ]
              });
            console.log('municipality:::', municipality);
            return municipality;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async restoreMunicipality(entity_key:any) {
        let data = {};
        try {            
            const municipality = await this.model.findByPk(entity_key, { paranoid: false });  
            if(!municipality){
                // En caso de que no exista
            }else{
                await municipality.restore();
                data = municipality;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default MunicipalityRepository;