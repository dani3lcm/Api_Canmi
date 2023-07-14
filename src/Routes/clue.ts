import { Router } from "express"
import { getClue, getClues } from "../Controllers/clues.controller";

const router = Router();

router.get("/",     getClues);
router.get("/:entity_key/:key_municipality",  getClue);

export { router }; 