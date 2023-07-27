import { Router } from "express";
import HasuraController from "./app/controller/hasuraController";
const router: Router = Router()

router.get("/", HasuraController.getProducts);

export { router };