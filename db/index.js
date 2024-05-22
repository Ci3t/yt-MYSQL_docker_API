import { createPool } from "mysql2/promise";
import { config } from "dotenv";
config();
const pool = createPool({
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
});

async function connectToDB() {
  try {
    await pool.getConnection();
    console.log(`✨✨MYSQL DB ONLINE ✨✨`);
  } catch (error) {
    console.log(`MYSQL DB CONNECTION ERROR 🔴`);
    console.log(error);
    throw error;
  }
}

export { connectToDB, pool };
