import { Router } from "express";

// import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificatioController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  return createSpecificatioController.handle(req, res);
});

// specificationRoutes.get("/", (req, res) => {
//   const { name } = req.body;
//   const specification = specificationRepository.findByName(name);
//   return res.status(201).json(specification);
// });

export { specificationRoutes };
