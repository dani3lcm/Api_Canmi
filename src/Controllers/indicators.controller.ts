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
            msg: 'getState',
            id: indicator_id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_INDICATOR")
    }
}

// export const postClinic = (req: Request, res: Response) => {
//     try {
//         const { body } = req;

//         res.json({
//             msg: 'postClinic',
//             body
//         });
//     } catch (e) {
//         handleHttp(res, "ERROR_POST_CLINIC")
//     }
// }

// export const putClinic = (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const { body } = req;

//         res.json({
//             msg: 'putClinic',
//             id,
//             body
//         });
//     } catch (e) {
//         handleHttp(res, "ERROR_PUT_CLINIC")
//     }
// }

// export const deleteClinic = (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;

//         res.json({
//             msg: 'deleteClinic',
//             id
//         });
//     } catch (e) {
//         handleHttp(res, "ERROR_DELETE_CLINIC")
//     }
// }