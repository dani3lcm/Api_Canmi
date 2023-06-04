import { Router } from "express"
import { getStates, getState, postState, putState, deleteState, restoreState } from "../Controllers/states.controller";

const router = Router();

/**
 * Get track
 * @openapi
 * /state:
 *    get:
 *      tags:
 *        - state
 *      summary: "List states"
 *      description: Lista los estados
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - bearerAuth: []
 */
router.get("/", getStates);


router.get("/:id", getState);


/**
 * Post track
 * @openapi
 * /state:
 *    post:
 *      tags:
 *        - state
 *      summary: "Listar usuario"
 *      description: Este endpoint es para listar los usuario totales 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/state"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - bearerAuth: []
 */
router.post("/", postState);
router.put("/:id", putState);
router.delete("/:id", deleteState);
router.post("/restore/:id", restoreState);


export { router };