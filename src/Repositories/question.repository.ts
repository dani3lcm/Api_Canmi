import { Model } from "sequelize";
import Question from "../Models/question.model";
import BaseRepository from "../Abstracts/base.repository";

class QuestionRepository extends BaseRepository<Model>{
    protected model;
    constructor(){         
        super(); 
        this.model = Question;
    }

    async getQuestions() {        
        try {
            const questions = await Question.findAll();
            console.log('questions:::', questions);
            return questions;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async getQuestion(indicator_id:any) {        
        try {           
            const question = await Question.findAll({
                where: { indicator_id: indicator_id },
              });
              
            console.log('question:::', question);
            return question;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async restoreQuestion(Id:any) {
        let data = {};
        try {            
            const question = await this.model.findByPk(Id, { paranoid: false });  
            if(!question){
                // En caso de que no exista
            }else{
                await question.restore();
                data = question;
            }
            return data;
        } catch(err) {
            //logger.error('Error::' + err);
        }
        return data;
        //return {status: `${data.deletedCount > 0 ? true : false}`};
    }


}

export default QuestionRepository;