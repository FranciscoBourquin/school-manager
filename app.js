import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { studentsRouter } from "./routes/students.routes.js";

const PORT = process.env.PORT; 

const app = express();

app.use(express.json());
app.get("/", (req, res)=> res.send("API en Vercel funcionando"));
app.use("/api/students/", studentsRouter)

connectDB()
.then(console.log(`Servidor escuchando en el puerto: ${PORT}`));

export default app;