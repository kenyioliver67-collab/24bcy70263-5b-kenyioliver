import express from "express";
import Student from "../models/student.model.js";

const router = express.Router();

router.get("/", async(req, res) => {
    const students = await Student.find();
    res.render("students/index", { students });
});

router.post("/", async(req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.redirect("/view/students");
});

router.get("/edit/:id", async(req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("students/edit", { student });
});

router.post("/update/:id", async(req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/view/students");
});

router.get("/delete/:id", async(req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/view/students");
});

export default router;