import { Router } from "express"
import { getClinics, getClinic, postClinic, putClinic, deleteClinic } from "../Controllers/clinics.controller";

const router = Router();

router.get("/",     getClinics);
router.get("/:id",  getClinic);
router.post("/",     postClinic);
router.put("/:id",  putClinic);
router.delete("/:id",  deleteClinic);

export { router };