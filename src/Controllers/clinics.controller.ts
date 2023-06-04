import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";

export const getClinics = (req: Request, res: Response) => {
    try {
        res.json({
            msg: 'getClinics'
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLINICS")
    }
}

export const getClinic = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        res.json({
            msg: 'getClinic',
            id
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_CLINIC")
    }
}

export const postClinic = (req: Request, res: Response) => {
    try {
        const { body } = req;

        res.json({
            msg: 'postClinic',
            body
        });
    } catch (e) {
        handleHttp(res, "ERROR_POST_CLINIC")
    }
}

export const putClinic = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;

        res.json({
            msg: 'putClinic',
            id,
            body
        });
    } catch (e) {
        handleHttp(res, "ERROR_PUT_CLINIC")
    }
}

export const deleteClinic = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        res.json({
            msg: 'deleteClinic',
            id
        });
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_CLINIC")
    }
}