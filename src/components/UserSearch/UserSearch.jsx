import React, { useState } from "react";
import "./UserSearch.css"; // Import the updated CSS file

function UserSearch({ fetchUserData }) {
  const [userId, setUserId] = useState("");

  const handleSearch = () => {
    if (userId.trim()) {
      fetchUserData(userId);
    } else {
      alert("Please enter a valid User ID.");
    }
  };

  return (
    <section className="user-search">
      <div className="search-content">
        <h2 className="search-title">🔍 Search Student by ID</h2>
        <p className="search-description">
          Enter Your ID.
        </p>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Enter Student ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="search-input"
          />
          <p className="hint">Example:24HP5A0503</p>
          <button className="search-button" onClick={handleSearch}>
            Get Marks
          </button>
        </div>
      </div>
    </section>
  );
}

export default UserSearch;
