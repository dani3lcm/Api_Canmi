import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import ClueService from "../Services/clue.service";

const clueService = new ClueService();

export const getClues = async (req: Request, res: Response) => {
    try {
        const data = await clueService.getClues();
        res.json({
            msg: 'getClues',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLUES")
    }
}

export const getClue = async (req: Request, res: Response) => {
    try {
        const { entity_key, key_municipality } = req.params;
        const data = await clueService.getClue(entity_key, key_municipality);
        res.json({
            msg: 'getClue',
            parameter: [{'entity_key': entity_key},{'key_municipality': key_municipality}],
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLUE")
    }
}