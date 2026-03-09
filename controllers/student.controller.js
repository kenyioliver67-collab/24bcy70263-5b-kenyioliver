import Student from "../models/student.model.js";

export const getStudents = async(req, res) => {
    const students = await Student.find();
    res.json(students);
};

export const createStudent = async(req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
};

export const getStudentById = async(req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
};

export const updateStudent = async(req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json(student);
};

export const deleteStudent = async(req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
};