import { Router } from "express"
import { getStates, getState, postState, putState, deleteState } from "../Controllers/states.controller";

const router = Router();

router.get("/",     getStates);
router.get("/:id",  getState);
router.post("/",     postState);
router.put("/:id",  putState);
router.delete("/:id",  deleteState);

export { router };