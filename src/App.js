import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection";
import UserSearch from "./components/UserSearch/UserSearch";
import TableComponent from "./components/TableSection/TableSection";
import MotivationSection from "./components/MotivationSection/MotivationSection";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState(""); // For response messages
  const [loading, setLoading] = useState(false); // Spinner state

  const fetchUserData = async (userId) => {
    setLoading(true); // Show spinner
    setUserData("")
    setMessage("")
    try {
      const response = await fetch(`https://studentdashboard-7vmj.onrender.com/api/student/result/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data.result); // Update marks data
      } 
      else{
        setMessage("❌ Invalid number. No data found.");
      }      
    } catch (error) {
      alert(`User not found ${error}`);
    }
    finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <UserSearch fetchUserData={fetchUserData} />
      <p className="responseMessage">{message}</p> {/* Ensure message is used here */}
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {userData && <TableComponent data={userData} />}
      <MotivationSection />
    </div>
  );
}

export default App;
