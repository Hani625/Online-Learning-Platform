// src/components/CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../firebase';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    database.ref(`courses/${id}`).on('value', snapshot => {
      setCourse(snapshot.val());
    });
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.instructor}</p>
      <p>{course.description}</p>
      {/* Add more course details here */}
    </div>
  );
};

export default CourseDetails;