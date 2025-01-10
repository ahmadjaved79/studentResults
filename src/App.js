import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/HeroSection/HeroSection";
import UserSearch from "./components/UserSearch/UserSearch";
import TableComponent from "./components/TableSection/TableSection";
import MotivationSection from "./components/MotivationSection/MotivationSection";
import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);
  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://studentdashboard-7vmj.onrender.com/api/student/result/${userId}`);
      const data = await response.json();
      console.log(data.semesters)
      setUserData(data.result);
    } catch (error) {
      alert(`User not found ${error}`);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <UserSearch fetchUserData={fetchUserData} />
      {userData && <TableComponent data={userData} />}
      <MotivationSection />
    </div>
  );
}

export default App;
