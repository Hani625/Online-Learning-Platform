// src/components/InstructorDashboard.js
import React, { useState } from 'react';
import { database } from '../firebase';

const InstructorDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');

  const handleSubmit = () => {
    const newCourse = {
      title,
      description,
      instructor,
      rating: 0,
    };
    database.ref('courses').push(newCourse)
      .then(() => {
        setTitle('');
        setDescription('');
        setInstructor('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create a New Course</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Course Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Course Description"
      />
      <input
        type="text"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        placeholder="Instructor Name"
      />
      <button onClick={handleSubmit}>Create Course</button>
    </div>
  );
};

export default InstructorDashboard;