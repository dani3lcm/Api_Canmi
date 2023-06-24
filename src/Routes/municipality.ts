import { Router } from "express"
import { getMunicipalities, getMunicipality } from "../Controllers/municipalities.controller";

const router = Router();

router.get("/", getMunicipalities);
router.get("/:entity_key", getMunicipality);

export { router }; 