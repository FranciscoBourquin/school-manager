import { createStudentService } from "../services/students.service.js";

export const getStudentsController = async () => {

};

export const getStudentByIdController = async () => {

};

export const createStudentController = async (req, res) => {
    const studentInfo = req.body;

    try {
       const student = await createStudentService(studentInfo);
       res.status(201).json({message: "Estudiante creado con éxito!", student});
        }
    catch (error) {
        res.status(500).json({error: error.message});
    }

}

export const updateStudentByIdController = async () => {

};

export const deleteStudentByIdController = async () => {
    
};