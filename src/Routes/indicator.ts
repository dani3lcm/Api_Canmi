import { Router } from "express"
import { getIndicator, getIndicators } from "../Controllers/indicators.controller";

const router = Router();

router.get("/",     getIndicators);
router.get("/:indicator_id",  getIndicator);
// router.post("/",     postClinic);
// router.put("/:id",  putClinic);
// router.delete("/:id",  deleteClinic);

export { router };