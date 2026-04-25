import Student from "../models/student.model.js";

export const getStudents = async(req,res)=>{
    const students = await Student.find();
    res.redirect("/view/students");
};

export const createStudent = async(req,res)=>{
    const student = await Student.create(req.body);
    res.redirect("/view/students");
};

export const getStudentById = async(req,res)=>{
    const student = await Student.findById(req.params.id);
    res.redirect("/view/students");
};

export const updateStudent = async (req,res)=>{
    await Student.findByIdAndUpdate(req.params.id,req.body);
    res.redirect("/view/students");
};

export const deleteStudent = async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/view/students");
};