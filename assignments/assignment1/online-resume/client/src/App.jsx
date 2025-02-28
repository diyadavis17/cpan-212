import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

function App() {
  return (
    <div className="page-wrapper d-flex justify-content-center align-items-center min-vh-100">
      <div className="resume shadow-lg rounded p-4 w-100 w-md-75 w-lg-50">
        <div className="personal-info text-center mb-4">
          <h1>Diya Davis</h1>
          <p>(123) 456-7890 | rereede@gmail.com | 123 Main St, Toronto, ON</p>
        </div>
        <div className="underline"></div>
        <div className="objective">
          <h2>Objective</h2>
          <p>
            Aspiring software developer with a focus on web technologies and problem-solving skills, looking to contribute to dynamic and innovative teams.
          </p>
        </div>
        <div className="summary">
          <h2>Summary of Qualifications</h2>
          <ul className="custom-list">
            <li>Proficient in React, JavaScript, and Python.</li>
            <li>Experience with databases like MySQL and MongoDB.</li>
            <li>Strong problem-solving and analytical skills.</li>
          </ul>
        </div>
        <div className="education">
          <h2>Education</h2>
          <ul className="custom-list">
            <li>Diploma in Computer Programming - Humber College (2025)</li>
            <li>Bachelor of Computer Science - University of Toronto (2023)</li>
            <li>Certification in Data Science - Coursera (2024)</li>
          </ul>
        </div>
        <div className="projects">
          <h2>Academic Projects</h2>
          <ul className="custom-list">
            <li>Weather App: Built a React weather app fetching data from an API.</li>
            <li>Fitness Tracker: Developed a full-stack fitness tracker app.</li>
          </ul>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul className="custom-list">
            <li>Programming Languages: JavaScript, Python, SQL</li>
            <li>Web Technologies: React, Node.js, HTML, CSS</li>
            <li>Databases: MySQL, MongoDB</li>
            <li>Version Control: Git</li>
          </ul>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <ul className="custom-list">
            <li>
              Data Analyst at Bell (2024-Present)
              <ul className="sub-list">
                <li>Analyzed data trends and insights for business operations.</li>
              </ul>
            </li>
            <li>
              Junior Developer at Tech Solutions (2023-2024)
              <ul className="sub-list">
                <li>Developed web applications using React and Node.js.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
