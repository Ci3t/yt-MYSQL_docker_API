import { pool } from "./index.js";

export const find = async () => {
  const q = "SELECT * FROM products";

  try {
    const client = await pool.getConnection();
    const result = await client.query(q);

    return result[0];
  } catch (error) {
    console.log(`ERROR while finding all records`, error);
    throw error;
  }
};
export const findById = async (id) => {
  const q = "SELECT * FROM products WHERE id = ?";

  try {
    const client = await pool.getConnection();
    const result = await client.query(q, [id]);

    return result[0];
  } catch (error) {
    console.log(`ERROR while finding by ID records`, error);
    throw error;
  }
};
export const create = async (title, description, price) => {
  const q = "INSERT INTO products (title,description,price) VALUES (?,?,?)";

  try {
    const client = await pool.getConnection();
    const result = await client.query(q, [title, description, price]);

    return result[0];
  } catch (error) {
    console.log(`ERROR while creating new record`, error);
    throw error;
  }
};
export const deleteProd = async (id) => {
  const q = "DELETE FROM products WHERE id = ?";

  try {
    const client = await pool.getConnection();
    const result = await client.query(q, [id]);

    return result[0];
  } catch (error) {
    console.log(`ERROR while deleting  record`, error);
    throw error;
  }
};

export const update = async (title, description, price, id) => {
  const q =
    "UPDATE products SET `title` = ? , description =? , price = ? WHERE id = ?";
  const values = [title, description, price];

  try {
    const client = await pool.getConnection();
    const result = await client.query(q, [...values, id]);

    return result[0];
  } catch (error) {
    console.log(`ERROR while updating record`, error);
    throw error;
  }
};
