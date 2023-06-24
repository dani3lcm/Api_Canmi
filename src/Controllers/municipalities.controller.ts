import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import MunicipalityService from "../Services/municipality.service";

const municipalityService = new MunicipalityService();

export const getMunicipalities = async (req: Request, res: Response) => {
    try {
        const data = await municipalityService.getMunicipalities();
        res.json({
            msg: 'getMunicipalities',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_FEDERATIVE_MUNICIPALITIES")
    }
}

export const getMunicipality = async (req: Request, res: Response) => {
    try {
        const { entity_key } = req.params;
        const data = await municipalityService.getMunicipality(entity_key);
        res.json({
            msg: 'getMunicipality',
            id: entity_key,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_EDERATIVE_MUNICIPALITY")
    }
}