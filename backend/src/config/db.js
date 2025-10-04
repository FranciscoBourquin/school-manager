import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a la base de datos exitosa");
        
    } catch (error) {
        console.error(`Error al conectarse a la base de datos: ${error.message}`);
        
    }
}