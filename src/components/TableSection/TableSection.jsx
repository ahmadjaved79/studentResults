
import React, { useState } from "react";
import "./TableSection.css";

function TableComponent({ data }) {
  const [selectedSemester, setSelectedSemester] = useState(null); // Track the selected semester

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  const handleSemesterChange = (event) => {
    const semesterIndex = event.target.value === "none" ? null : parseInt(event.target.value);
    setSelectedSemester(semesterIndex);
  };

  return (
    <div>
      <div className="greetings-container">
        <h1 className="greeting-message">
          Hello {data.studentName}, {getGreetingMessage()}
        </h1>
      </div>

      <div className="table-container">
        <h3>Student Information</h3>
        <p>Enrollment Number: {data.enrollmentNumber}</p>
        <p>Total Backlogs: {data.totalBacklogs}</p>

        <div className="dropdown-container">
          <label htmlFor="semester-select">Select Semester:</label>
          <select
            id="semester-select"
            onChange={handleSemesterChange}
            className="semester-dropdown"
          >
            <option value="none">--Select Semester--</option>
            {data.semesters.map((semester, index) => (
              <option key={index} value={index}>
                Semester {semester.semester}
              </option>
            ))}
          </select>
        </div>

        {selectedSemester !== null && (
          <div className="semester-details">
            <h4>Semester {data.semesters[selectedSemester].semester}</h4>
            <p>SGPA: {data.semesters[selectedSemester].sgpa}</p>
            <p>CGPA: {data.semesters[selectedSemester].cgpa}</p>
            <p>Current Backlogs: {data.semesters[selectedSemester].backlogs}</p>
            <p>Status: {data.semesters[selectedSemester].status}</p>

            <table>
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Subject Name</th>
                  <th>Internal</th>
                  <th>Credits</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {data.semesters[selectedSemester].subjects.map((subject, idx) => (
                  <tr key={idx}>
                    <td>{subject.subjectCode}</td>
                    <td>{subject.name}</td>
                    <td>{subject.internal}</td>
                    <td>{subject.credits}</td>
                    <td>{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TableComponent;
