import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Default route
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to My Resume API 🚀</h2>
        <p>Available Endpoints:</p>
        <ul>
            <li><a href="/getOverview">Overview</a></li>
            <li><a href="/getEdu">Education</a></li>
            <li><a href="/getExp">Experience</a></li>
            <li><a href="/getProjects">Academic Projects</a></li>
            <li><a href="/getSkills">Skills</a></li>
        </ul>
    `);
});

// Sample API Data
const overview = {
    name: "Diya Davis",
    summary: "Aspiring software developer with a background in data analysis and programming.",
    phone: "(XXX) XXX-XXXX",
    email: "rereede@gmail.com",
    address: "Toronto, ON, Canada"
};

const education = [
    { degree: "Diploma in Computer Programming", institution: "Humber College", year: "2025" },
    { degree: "Bachelor of Computer Science", institution: "University of Toronto", year: "2023" },
    { degree: "Certification in Data Science", institution: "Coursera", year: "2024" }
];

const experience = [
    { jobTitle: "Data Analyst", company: "Bell", year: "2024 - Present", description: "Worked with large datasets to analyze trends and support decision-making." },
    { jobTitle: "Junior Developer", company: "Tech Solutions", year: "2023 - 2024", description: "Assisted with front-end development and worked with ReactJS to build applications." }
];

const projects = [
    { title: "Project Management Tool", description: "A web application to manage projects, built with React and Node.js." },
    { title: "Personal Finance Tracker", description: "A finance tracking app built using JavaScript and integrated with a local database." }
];

const skills = ["JavaScript", "React", "Node.js", "SQL", "Python", "HTML & CSS"];

// API Routes
app.get('/getOverview', (req, res) => res.json(overview));
app.get('/getEdu', (req, res) => res.json(education));
app.get('/getExp', (req, res) => res.json(experience));
app.get('/getProjects', (req, res) => res.json(projects));
app.get('/getSkills', (req, res) => res.json(skills));

// Error Handling for Invalid Routes
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on: http://localhost:${PORT}`));
