import { Router } from "express";
import productsRoutes from "./products.routes.js";

const indexRoutes = Router();
indexRoutes.use("/products", productsRoutes);
export default indexRoutes;
