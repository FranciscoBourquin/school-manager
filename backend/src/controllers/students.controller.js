import { createStudentService, getStudentByIdService, getStudentsByCourseService, getStudentsService } from "../services/students.service.js";

export const getStudentsController = async (req, res) => {
    const { course } = req.query;
    try {
        if (course) {
            const students = await getStudentsByCourseService(course);
            if (students.length === 0) {
                return res.status(200).json({
                    message: `No hay estudiantes inscriptos en el curso de ${course}`,
                    students})
            }
        }

        const students = await getStudentsService();

        if (students.length === 0) return res.status(200).json({
            message: "No tenemos estudiantes incriptos en este momento", 
            students
        })

        res.status(200).json({
            message: "Estudiantes encontrados con éxito!",
            students
        })

        
    } catch (error) {
        res.status(500).json({rror: error.message})
    }
};

export const getStudentByIdController = async (req, res) => {
    const {id} = req.body;
    const student = await getStudentByIdService(id)
    if(!student) {
        return res.status(404).json({
            message: `Estudiante con ID ${id} no encontrado`,
            student
        })
    }

    res.status(200).json({
        message: `Estudiante con ID ${id} encontrado con éxito!`,
        student 
    })

    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

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