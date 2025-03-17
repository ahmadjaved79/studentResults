import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./TableSection.css";

function TableComponent({ data }) {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const memoRef = useRef(null);

  const handleSemesterChange = (event) => {
    const semesterIndex = event.target.value === "none" ? null : parseInt(event.target.value);
    setSelectedSemester(semesterIndex);
  };

  const downloadPDF = () => {
    const input = memoRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`Marks_Memo_${data.studentName}.pdf`);
    });
  };

  return (
    <div className="container">
      {/* Memo Section */}
      <div ref={memoRef}>
        <div className="greetings-container">
          <h1>Hello {data.studentName}, Good Day!</h1>
        </div>

        <div className="info-container">
          <h3>Student Information</h3>
          <p><strong>Enrollment Number:</strong> {data.enrollmentNumber}</p>
          <p><strong>Total Backlogs:</strong> {data.totalBacklogs}</p>
        </div>

        <div className="dropdown-container">
          <label htmlFor="semester-select">Select Semester:</label>
          <select id="semester-select" onChange={handleSemesterChange} className="semester-dropdown">
            <option value="none">--Select Semester--</option>
            {data.semesters.map((semester, index) => (
              <option key={index} value={index}>Semester {semester.semester}</option>
            ))}
          </select>
        </div>

        {selectedSemester !== null && (
          <div className="semester-details">
            <h4>Semester {data.semesters[selectedSemester].semester}</h4>
            <p><strong>Current Backlogs:</strong> {data.semesters[selectedSemester].backlogs}</p>
            <p><strong>Status:</strong> {data.semesters[selectedSemester].status}</p>

            <div className="table-wrapper">
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

            <p><strong>SGPA:</strong> {data.semesters[selectedSemester].sgpa}</p>
            <p><strong>CGPA:</strong> {data.semesters[selectedSemester].cgpa}</p>
          </div>
        )}
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={downloadPDF}>Download Memo</button>
    </div>
  );
}

export default TableComponent;
