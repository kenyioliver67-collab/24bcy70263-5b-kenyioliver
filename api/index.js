import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "../config/db.js";
import studentRoutes from "../routes/student.routes.js";
import studentViewRoutes from "../routes/student.view.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.get("/", (req, res) => {
    res.send("Student Management App Running");
});

app.use("/students", studentRoutes);
app.use("/view/students", studentViewRoutes);

export default app;