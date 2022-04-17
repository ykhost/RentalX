import { Router } from "express";
import multer from "multer";

import { createCategoreyController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoreyController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
