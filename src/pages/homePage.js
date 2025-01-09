import React, { useState } from 'react';
import StudentForm from '../components/studentForm';
import StudentList from '../components/studentsList';

const HomePage = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm onSubmit={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default HomePage;
