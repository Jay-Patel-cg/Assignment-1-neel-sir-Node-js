const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];



app.get("/students" , (req,res)=>{
    res.status(200).json(students)
});

app.get("/students/topper" , (req,res) => {
    if(students.length == 0){
        return res.status(404).json({message : "User not found"});
    }

    const topper = students.reduce((highest , current) => {
        return current.cgpa > highest.cgpa ? current : highest; // given below if conditoion is this line full explanation
        // if (current.cgpa > highest.cgpa) {
        //     return current;
        // } else {
        //     return highest;
        // }
    });

    res.status(200).json(topper);

});


app.get("/students/average" , (req , res) => {
    if(students.length == 0 ){
        return res.status(404).json({message : "User not found"});
    }

    const total = students.reduce((sum , student ) => {
        return sum + student.cgpa;
    },0);

    const average = total/students.length;
    
    res.status(200).json({
        averageCGPA: Number(average.toFixed(2))
    });
});

app.get("/students/count" , (req , res) => {
    if(students.length == 0){
        return res.status(404).json({message : "User not found"});
    }

    const count = students.length;

    res.status(200).json({
        countTotal : Number(count)
    });
});

app.get("/students/:id" , (req , res) => {
   
    const userId = parseInt(req.params.id);

    const student = students.find(student => student.id === userId);

    if(!students){
        return res.status(404).json({message : "User not found"});
    }

    res.status(200).json(student);
});

app.get("/students/branch/:branchName" , (req , res) => {
    if(!students){
        return res.status(404).json({message : "User not found"});
    }

    const branchName = req.params.branchName.toLocaleLowerCase();

    const filterStudent = students.filter(student => student.branch.toLocaleLowerCase() === branchName ); 

    res.status(200).json(filterStudent);
});


app.listen(3000, () => {
    console.log("Server Started on Port 3000");
});