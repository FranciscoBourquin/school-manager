import { studentModel } from "../models/students.model.js";

export const getStudentsService = async () => {

};

export const getStudentByIdService = async () => {

};

export const createStudentService = async (studentInfo) => {
    try {
        const student = await studentModel.create(studentInfo);
        return student;
    } catch (error) {
        throw new Error(error.message);
        
    }
}

export const updateStudentByIdService = async () => {

};

export const deleteStudentByIdService = async () => {
    
};
