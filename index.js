import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import viewRoutes from "./routes/student.view.routes.js";
import methodOverride from "method-override";

dotenv.config();

const app = express();
app.use(methodOverride("_method"));

connectDB();

app.set("view engine","ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/students",studentRoutes);
app.use("/view",viewRoutes);
app.use(methodOverride("_method"));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.redirect("/view/students");
});

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});
