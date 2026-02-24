# 🎓 Student CGPA REST API  
### Assignment 1 – Express.js (In-Memory JSON Database)

---

## 📌 Project Title  

Student CGPA Management REST API

---

## 🎯 Objective  

The objective of this assignment is to build a RESTful API using Node.js and Express.js that manages student academic performance records stored in an in-memory JSON array.

This project demonstrates:

- REST API design principles  
- Static and dynamic GET routes  
- Route parameters handling  
- Server-side filtering and aggregation  
- Proper HTTP status codes  
- Middleware usage (CORS, express.json)  
- Professional deployment  

No external database is used.  
All data is stored inside the project as a JSON array.

---

## 📚 Problem Statement  

Create an API that manages student academic records.

Each student record contains:

{
  id: 1,
  name: "Aditya",
  branch: "CSE",
  semester: 6,
  cgpa: 8.4
}

The application includes:

- 4 Static GET routes  
- 2 Dynamic GET routes  
- Proper error handling  
- Correct HTTP status codes  

---

# 🚀 List of Implemented Routes  

## Static Routes

1. GET /students  
   - Returns all students  
   - Status Code: 200  

2. GET /students/topper  
   - Returns student with highest CGPA  
   - Status Code: 200  
   - If no students exist → 404  

3. GET /students/average  
   - Returns average CGPA  

   Example Response:
   {
     "averageCGPA": 8.12
   }

4. GET /students/count  
   - Returns total number of students  

   Example Response:
   {
     "totalStudents": 10
   }

---

## Dynamic Routes

5. GET /students/:id  

   Example:
   /students/3  

   - Returns student by ID  
   - If not found → 404  

6. GET /students/branch/:branchName  

   Example:
   /students/branch/CSE  

   - Returns students from specific branch  
   - Case-insensitive filtering implemented  
   - If none found → returns empty array  

---

# 🌐 Sample API URLs  

Base URL (Deployed):
https://assignment-1-neel-sir-node-js.onrender.com

Get All Students:
https://assignment-1-neel-sir-node-js.onrender.com/students

Get Topper:
https://assignment-1-neel-sir-node-js.onrender.com/students/topper

Get Student by ID:
https://assignment-1-neel-sir-node-js.onrender.com/students/3

Get Students by Branch:
https://assignment-1-neel-sir-node-js.onrender.com/students/branch/CSE

---

# 💻 Steps to Run Locally  

1. Clone the Repository

git clone https://github.com/your-username/student-cgpa-api.git

2. Navigate to Project Folder

cd student-cgpa-api

3. Install Dependencies

npm install

4. Run Server

npm start

OR (if using nodemon)

npx nodemon index.js

5. Open in Browser

http://localhost:3000/students

---

# 📬 Postman Documentation  

Public Postman Documentation Link:

https://documenter.getpostman.com/view/50839294/2sBXcGCec9

Includes:
- All 6 routes  
- Sample responses  
- HTTP status codes  
- Proper documentation  

---

# 🌍 Deployed Link (Render)  

https://assignment-1-neel-sir-node-js.onrender.com

All routes are publicly accessible and working.

---

# 🛠 Technologies Used  

- Node.js  
- Express.js  
- CORS Middleware  
- In-Memory JSON Data  
- Render (Deployment)  
- Postman (API Documentation)  

---

# 📂 Project Structure  

student-cgpa-api/
│
├── node_modules/
├── package.json
├── package-lock.json
├── index.js
├── routes/
│   └── studentRoutes.js
├── .gitignore
└── README.md

---

# ✅ Repository Guidelines Followed  

- Clean folder structure  
- Meaningful commit messages  
- Proper middleware order  
- RESTful route naming  
- Correct HTTP status codes  
- No hardcoded localhost in production  

Example Commit Messages:

- Initial project setup  
- Added static student routes  
- Implemented dynamic route parameters  
- Added average CGPA calculation  
- Deployed project to Render  
- Added Postman documentation  

---

# 🎓 Learning Outcomes  

After completing this assignment:

- Designed RESTful GET APIs  
- Implemented dynamic route parameters  
- Performed filtering and aggregation logic  
- Returned structured JSON responses  
- Deployed backend API professionally  
- Documented APIs using Postman  

---

# 📌 Submission Links  

GitHub Repository:
https://github.com/your-username/student-cgpa-api

Postman Documentation:
https://documenter.getpostman.com/view/50839294/2sBXcGCec9

Render Deployment:
https://assignment-1-neel-sir-node-js.onrender.com
