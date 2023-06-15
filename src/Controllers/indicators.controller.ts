import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import IndicatorService from "../Services/indicator.service";

const indicatorService = new IndicatorService();

export const getIndicators = async (req: Request, res: Response) => {
    try {
        const data = await indicatorService.getIndicators();
        res.json({
            msg: 'getIndicators',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_INDICATORS")
    }
}

export const getIndicator = async (req: Request, res: Response) => {
    try {
        const { indicator_id } = req.params;
        const data = await indicatorService.getIndicator(indicator_id);
        res.json({
            msg: 'getIndicator',
            id: indicator_id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_INDICATOR")
    }
}