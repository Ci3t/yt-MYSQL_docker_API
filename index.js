import express from "express";
import { config } from "dotenv";
import indexRoutes from "./routes/index.routes.js";
import { connectToDB } from "./db/index.js";
const app = express();
config();

//! middleware
app.use(express.json());

app.use("/api", indexRoutes);

const PORT = process.env.PORT || 5000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`ERROR with MYSQL CONNECTION ERROR = :`, err);
    process.exit(0);
  });
