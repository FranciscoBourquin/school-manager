import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { studentsRouter } from "./routes/students.routes.js";

const PORT = process.env.PORT; 

const app = express();

app.use(express.json());
app.use("/api/students/", studentsRouter)

connectDB();

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));