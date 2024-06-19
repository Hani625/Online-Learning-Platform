// src/components/StudentDashboard.js
import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      database.ref(`users/${user.uid}/enrolledCourses`).on('value', snapshot => {
        const data = snapshot.val();
        const courseList = [];
        for (let id in data) {
          courseList.push({ id, ...data[id] });
        }
        setEnrolledCourses(courseList);
      });
    }
  }, []);

  return (
    <div>
      <h1>Enrolled Courses</h1>
      <ul>
        {enrolledCourses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;