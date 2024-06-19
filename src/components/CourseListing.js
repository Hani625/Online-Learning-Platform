// src/components/CourseListing.js
import React, { useEffect, useState } from 'react';
import { database } from '../firebase';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    database.ref('courses').on('value', snapshot => {
      const data = snapshot.val();
      const courseList = [];
      for (let id in data) {
        courseList.push({ id, ...data[id] });
      }
      setCourses(courseList);
    });
  }, []);

  return (
    <div>
      <h1>Course Listing</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.instructor}</p>
            <p>{course.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;