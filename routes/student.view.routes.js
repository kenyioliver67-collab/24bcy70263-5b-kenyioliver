import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

router.get("/students", async(req,res)=>{
    const students = await Student.find();
    res.render("students/index",{students});
});

router.get("/students/:id/edit", async(req,res)=>{
    const student = await Student.findById(req.params.id);
    res.render("students/edit",{student});
});

export default router;