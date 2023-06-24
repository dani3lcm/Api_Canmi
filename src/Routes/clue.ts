import { Router } from "express"
import { getClue, getClues } from "../Controllers/clues.controller";

const router = Router();

router.get("/",     getClues);
router.get("/:clue_id",  getClue);

export { router }; 