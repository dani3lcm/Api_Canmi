import { Model } from "sequelize";
import BaseRepository from "../Abstracts/base.repository";
import Clues from "../Models/clue.model";

class ClueRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Clues;      
    }

    async getClues() {        
        try {
            const clues = await Clues.findAll({
                order:[
                    ['clue_id', 'ASC']
                ]
            });
            console.log('clues:::', clues);
            return clues;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getClue(key_municipality:any) {        
        try {           
            const clue = await Clues.findAll({
                where: { key_municipality: key_municipality },
              });
            console.log('clue:::', clue);
            return clue;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async restoreClue(clue_id:any) {
        let data = {};
        try {            
            const clue = await this.model.findByPk(clue_id, { paranoid: false });  
            if(!clue){
                // En caso de que no exista
            }else{
                await clue.restore();
                data = clue;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default ClueRepository;