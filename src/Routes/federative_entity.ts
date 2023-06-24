import { Router } from "express"
import { getFederativeEntities, getFederativeEntity } from "../Controllers/federative_entities.controller";

const router = Router();

router.get("/", getFederativeEntities);
router.get("/:entity_key", getFederativeEntity);

export { router }; 