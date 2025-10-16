import mongoose from "mongoose";

const collection = "students";

const studentSchema = new mongoose.Schema( 
    {
    nombre: {
        type: String,
        required: true,
    },

    apellido: {
        type: String, 
        required: true
    },

    email: String,

    cursos: 
    {
        type: [String],
        required: true,
        enum: ["Matemática" , "Historia" , "Ciencias" , "Arte"]
    },
},
    {
        timestamps: true
    })

export const studentModel =  mongoose.model(collection, studentSchema);