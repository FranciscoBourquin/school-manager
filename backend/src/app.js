import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { studentsRouter } from "./routes/students.routes.js";

const PORT = process.env.PORT; 

const app = express();

app.use(express.json());
app.get("/", ()=> console.log("API en Vercel funcionando"));
app.use("/api/students/", studentsRouter)

connectDB()
app.listen(PORT, "0.0.0.0", (console.log(`Servidor escuchando en ${PORT}`)
))