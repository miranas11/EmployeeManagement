import { Router } from "express";
const router = Router();
import {
    createEmployee,
    deleteEmployee,
    editEmployee,
    getEmployee,
} from "../controllers/employeeController.js";
import { isAuthorized } from "../utils/middlewares.js";

router.route("/create").post(isAuthorized, createEmployee);

router.route("/search").get(isAuthorized, getEmployee);

router
    .route("/:id")
    .delete(isAuthorized, deleteEmployee)
    .patch(isAuthorized, editEmployee);

export default router;
