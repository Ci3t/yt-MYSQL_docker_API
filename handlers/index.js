import { create, deleteProd, find, findById, update } from "../db/quaries.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await find();
    return res.json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURD" });
  }
};
export const getProduct = async (req, res) => {
  const prodId = req.params.id;

  try {
    const product = await findById(prodId);
    return res.json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURD" });
  }
};
export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;

  if (!(title || description || price)) {
    return res.json({
      message: "Input is Empty Fill all  title description price ",
    });
  }
  try {
    const newProduct = await create(title, description, price);
    return res.status(201).json({ newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURD" });
  }
};
export const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;
  const prodId = req.params.id;
  if (!(title || description || price)) {
    return res.json({
      message: "Input is Empty Fill all  title description price ",
    });
  }
  try {
    const newProduct = await update(title, description, price, prodId);
    return res.status(201).json({ newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURD" });
  }
};
export const deleteProduct = async (req, res) => {
  const prodId = req.params.id;

  try {
    const product = await deleteProd(prodId);
    return res.json({ message: "DELETED ", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ERROR OCCURD" });
  }
};
