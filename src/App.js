// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Auth from './components/Auth';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import InstructorDashboard from './components/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CourseListing} />
        <Route path="/login" component={Auth} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/instructor-dashboard" component={InstructorDashboard} />
        <Route path="/student-dashboard" component={StudentDashboard} />
      </Switch>
    </Router>
  );
}

export default App;