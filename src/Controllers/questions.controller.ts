import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import QuestionService from "../Services/question.service";

const questionService = new QuestionService();

export const getQuestions = async (req: Request, res: Response) => {
    try {
        const data = await questionService.getQuestions();
        res.json({
            msg: 'getQuestions',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_QUESTIONS")
    }
}

export const getQuestion = async (req: Request, res: Response) => {
    try {
        const { indicator_id } = req.params;
        const data = await questionService.getQuestion(indicator_id);
        res.json({
            msg: 'getQuestion',
            id: indicator_id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_QUESTION")
    }
}
