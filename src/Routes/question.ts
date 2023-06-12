import { Router } from "express"
import { getQuestions, getQuestion } from "../Controllers/questions.controller";

const router = Router();

router.get("/",     getQuestions);
router.get("/:indicator_id",  getQuestion);
// router.post("/",     postClinic);
// router.put("/:id",  putClinic);
// router.delete("/:id",  deleteClinic);

export { router };