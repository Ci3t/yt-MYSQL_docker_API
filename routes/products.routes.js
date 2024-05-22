import { Router } from "express";

import {
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../handlers/index.js";

const productsRoutes = Router();

productsRoutes.get("/", getAllProducts);
productsRoutes.get("/:id", getProduct);
productsRoutes.post("/create", createProduct);
productsRoutes.put("/update/:id", updateProduct);
productsRoutes.delete("/delete/:id", deleteProduct);

export default productsRoutes;
