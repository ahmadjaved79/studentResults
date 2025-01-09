import React from "react";
import "./TableSection.css";

function TableComponent({ data }) {
  console.log(data.enrollmentNumber)

  const getGreetingMessage = () => {
    const currentHour = new Date().getHours(); // Get current hour

    if (currentHour < 12) {
      return "Good Morning!";
    } else if (currentHour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };
  return (
    <div>
     <div className="greetings-container">
      <h1 className="greeting-message">Hello {data.studentName} {getGreetingMessage()}</h1>
     </div>
    <div className="table-container">
      <h3>Student Information</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Subject Code</th>
            <th>Internals</th>
            <th>Credits</th>
            <th>Grades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.SubjectCode}</td>
            <td>{data.SubjectCode}</td>
            <td>{data.Internals}</td>
            <td>{data.Credits}</td>
            <td>{data.Grades}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default TableComponent;
