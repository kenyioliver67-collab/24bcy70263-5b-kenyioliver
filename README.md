## Student Management System (Node.js, Express, MongoDB, EJS)

This project is a **Student Management System** built as a CRUD application using **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS**.  
It follows the **MVC (Model–View–Controller)** pattern and is designed as a learning project for Experiment 5.

---

### Features

- **Create** new students with name and roll number
- **Read**: view a paginated list of students
- **Update** existing student details
- **Delete** students
- **REST API** (JSON) + **EJS views** (server‑side rendered UI)

---

### Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express
- **Database**: MongoDB with Mongoose
- **View Engine**: EJS
- **Others**: dotenv, cors, Bootstrap (CDN in views)

---

### Project Structure

```text
.
├─ config/
│  └─ db.js                 # MongoDB connection (Mongoose)
├─ controllers/
│  └─ student.controller.js # CRUD logic for Student
├─ models/
│  └─ student.model.js      # Student schema (name, roll, timestamps)
├─ routes/
│  ├─ student.routes.js     # /students API routes (JSON)
│  └─ student.view.routes.js# /view/students EJS view routes
├─ views/
│  └─ students/
│     ├─ index.ejs          # List + create form
│     └─ edit.ejs           # Edit / add form
├─ .env                     # Environment variables (not committed)
├─ index.js                 # App entry point
├─ package.json
└─ README.md
```

---

### Prerequisites

- Node.js **v16+**
- MongoDB running locally **or** a MongoDB Atlas URI

---

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/student-management
```

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

---

### Install & Run (Localhost)

1. **Install dependencies**

   ```bash
   cd c:\Users\Ayush\5b
   npm install
   ```

2. **Start MongoDB**

   - Local MongoDB: ensure the MongoDB service is running, or run `mongod`
   - Atlas: just ensure `MONGO_URI` is configured correctly

3. **Start the server**

   - Development (with auto‑reload, if `nodemon` is installed):

     ```bash
     npm run dev
     ```

   - Or plain Node:

     ```bash
     npm start
     ```

4. **Open in browser**

   - UI (EJS views): `http://localhost:3000/view/students`
   - Root redirect: `http://localhost:3000/` → redirects to `/view/students`

---

### API Endpoints

Base URL: `http://localhost:3000/students`

- **GET** `/students`  
  - Query params: `page`, `limit`, `sortBy`, `order` (`asc`/`desc`)
  - Returns paginated list of students (JSON)

- **POST** `/students`  
  - Body: `{ "name": "John Doe", "roll": 1 }`

- **GET** `/students/:id`  
  - Returns one student

- **PUT** `/students/:id`  
  - Body: fields to update, e.g. `{ "name": "New Name" }`

- **DELETE** `/students/:id`

Validation highlights:
- `name`: DRAMANE TRAORE
- `roll`: 24BCY70270

---

### Learning Objectives

- Understand **Express** routing and middleware
- Model data and validate with **Mongoose**
- Implement **full CRUD** with both JSON APIs and server‑rendered views
- Practice with **EJS templates** and Bootstrap
- Organize a Node.js app using the **MVC pattern**

---

### Notes

- `.env` and `node_modules/` are ignored via `.gitignore`.
- If `npm install` fails due to network/proxy issues, configure your npm proxy or install packages on a machine with internet access, then copy `node_modules` if needed.

