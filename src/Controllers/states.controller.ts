import { Request, Response } from "express";
import { handleHttp } from "../Utils/error.handle";
import StateService from "../Services/state.service";

const stateService = new StateService();

export const getStates = async (req: Request, res: Response) => {
    try {
        const data = await stateService.getStates();
        res.json({
            msg: 'getStates',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_STATES")
    }
}

export const getState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await stateService.getState(id);
        res.json({
            msg: 'getState',
            id: id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_GET_STATE")
    }
}

export const postState = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const data = stateService.createState(body);
        res.json({
            msg: 'postState',
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_POST_STATE")
    }
}

export const putState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const data = stateService.updateState(id, body);
        res.json({
            msg: 'putState',
            id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_PUT_STATE")
    }
}

export const deleteState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = stateService.deleteState(id);
        res.json({
            msg: 'deleteState',
            id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_STATE")
    }
}

export const restoreState = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = stateService.restoreState(id);
        res.json({
            msg: 'restoreState',
            id,
            data: data
        });
    } catch (e) {
        handleHttp(res, "ERROR_POST_STATE")
    }
}