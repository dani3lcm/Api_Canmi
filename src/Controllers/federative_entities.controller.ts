import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import FederativeEntityService from "../Services/federative_entity.service";

const federativeEntityService = new FederativeEntityService();

export const getFederativeEntities = async (req: Request, res: Response) => {
    try {
        const data = await federativeEntityService.getFederativeEntities();
        res.json({
            msg: 'getFederativeEntities',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_FEDERATIVE_ENTITIES")
    }
}

export const getFederativeEntity = async (req: Request, res: Response) => {
    try {
        const { entity_key } = req.params;
        const data = await federativeEntityService.getFederativeEntity(entity_key);
        res.json({
            msg: 'getFederativeEntity',
            id: entity_key,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_EDERATIVE_ENTITY")
    }
}