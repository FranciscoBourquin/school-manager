import { createStudentService, deleteStudentByIdService, getStudentByIdService, getStudentsByCourseService, getStudentsService, updateStudentByIdService } from "../services/students.service.js";

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

            return res.status(200).json({ 
                message: `Estudiantes inscriptos en el curso de ${course}`}, 
                students)
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
        res.status(500).json({error: error.message})
    }
};

export const getStudentByIdController = async (req, res) => {
    const {id} = req.params;
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
        res.status(500).json({error: error.message})
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

export const updateStudentByIdController = async (req, res) => {
    const {id} = req.params;
    const studentInfo = req.body;
    try {
        const updatedStudent = await updateStudentByIdService(id, studentInfo);

        if (!updatedStudent) {
            res.status(404).json({
                message: `Alumno con ID ${id} no encontrado!`,
                updatedStudent
            })
        }

        res.status(200).json({
            message: `Alumno con ID ${id} actualizado con éxito!`,
            updatedStudent
        })
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

};

export const deleteStudentByIdController = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteStudent = await deleteStudentByIdService(id);
        if (!deleteStudent){
            return res.status(404).json({
                message: `Estudinte con ID ${id} no encontrado`,
                deleteStudent
            })
        }

        res.status(200).json({
            message: `Estudiante con ID ${id} eliminado con éxito!`,
            deleteStudent
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }

};