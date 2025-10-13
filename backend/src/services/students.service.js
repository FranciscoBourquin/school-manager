import { studentModel } from "../models/students.model.js";

export const getStudentsService = async () => {
    const students = await studentModel.find();
    return students;
}

export const getStudentsByCourseService = async (course) => {
    const students = await studentModel.find({cursos: course});
    return students;
}

export const getStudentByIdService = async (id) => {
    const student = await studentModel.findById(id);
    return student;

};

export const createStudentService = async (studentInfo) => {
    
        const student = await studentModel.create(studentInfo);
        return student;
    
}

export const updateStudentByIdService = async (id) => {

};

export const deleteStudentByIdService = async () => {

};
