import QuestionRepository from "../Repositories/question.repository"

class QuestionService {
    questionRepository:QuestionRepository;
    constructor() {
        this.questionRepository = new QuestionRepository();
    }

    async getQuestions() {
        return await this.questionRepository.getQuestions();
    }

    async getQuestion(indicator_id:any) {
        return await this.questionRepository.getQuestion(indicator_id);
    }
    async restoreQuestion(Id:any) {
        const testBaseRepository = await this.questionRepository.testBaseRepository(Id);
        console.log(testBaseRepository);
        return await this.questionRepository.restoreQuestion(Id);
    }

}

export default QuestionService;