import { Model } from "sequelize";
import Indicator from "../Models/indicator.model";
import Question from "../Models/question.model";
import BaseRepository from "../Abstracts/base.repository";
import Questions_options from "../Models/question_option.model";

class IndicatorRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Indicator;
        this.model = Question;  
        this.model = Questions_options;      
    }

    async getIndicators() {        
        try {
            const indicators = await Indicator.findAll({
                include: [
                    {
                      model: Question,
                      include: [
                        Questions_options, 
                      ],
                    }
                  ]
              });
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