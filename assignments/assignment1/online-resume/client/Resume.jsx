import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Resume = () => {
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eduResponse = await axios.get('http://localhost:8000/getEdu');
        setEducation(eduResponse.data);

        const expResponse = await axios.get('http://localhost:8000/getExp');
        setExperience(expResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>My Resume</h1>

      <div>
        <h2>Education</h2>
        {education ? (
          <ul>
            {education.map((item, index) => (
              <li key={index}>{item.degree} - {item.institution} ({item.year})</li>
            ))}
          </ul>
        ) : <p>No education data available.</p>}
      </div>

      <div>
        <h2>Experience</h2>
        {experience ? (
          <ul>
            {experience.map((item, index) => (
              <li key={index}>{item.jobTitle} at {item.company} ({item.year})</li>
            ))}
          </ul>
        ) : <p>No experience data available.</p>}
      </div>
    </div>
  );
};

export default Resume;
