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
        const { clue_id } = req.params;
        const data = await clueService.getClue(clue_id);
        res.json({
            msg: 'getClue',
            id: clue_id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLUE")
    }
}