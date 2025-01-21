"use client";

import { useState } from "react";

const NumberPage = () => {
  // Dummy data
  const dummyData = generateDummyData();

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>User Data</h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Phone Number</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Shoe Size</th>
              <th style={tableHeaderStyle}>Shoe Type</th>
              <th style={tableHeaderStyle}>Shoe Colour</th>
              <th style={tableHeaderStyle}>Price Range</th>
              <th style={tableHeaderStyle}>Retargeted at</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user, index) => (
              <tr key={index} style={tableRowStyle}>
                <td>{user.phoneNumber}</td>
                <td>{user.name}</td>
                <td>{user.shoeSize}</td>
                <td>{user.shoeType}</td>
                <td>{user.shoeColour}</td>
                <td>{user.priceRange}</td>
                <td>{user.retargetedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Function to generate dummy data with some users completing only a few steps
const generateDummyData = () => {
  const users = [];
  const names = ["John", "Mary", "Alex", "Sophia", "Daniel", "Olivia", "Lucas", "Emma", "Ethan", "Ava"];
  const steps = [
    "Name",
    "Shoe Size",
    "Shoe Type",
    "Shoe Colour",
    "Price Range",
  ];

  for (let i = 0; i < 50; i++) {
    const name = names[i % names.length];
    const stepCompleted = Math.floor(Math.random() * 5) + 1; // Randomly choose how many steps are completed (1 to 5)

    const user = {
      phoneNumber: `+1234567890${i}`,
      name,
      shoeSize: stepCompleted >= 2 ? "8 UK" : "", // Dropped off after step 1
      shoeType: stepCompleted >= 3 ? "Formals" : "", // Dropped off after step 2
      shoeColour: stepCompleted >= 4 ? "Black" : "", // Dropped off after step 3
      priceRange: stepCompleted >= 5 ? "$50 - $100" : "", // Dropped off after step 4
      retargetedAt: steps[stepCompleted - 2], // Retargeting at the corresponding step
    };

    users.push(user);
  }

  return users;
};

// Styles
const pageStyle = {
  padding: "20px",
  marginTop: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
};

const tableContainerStyle = {
  overflowX: "auto",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "15px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const tableHeaderStyle = {
  padding: "12px 15px",
  textAlign: "left",
  backgroundColor: "#007bff",
  color: "#fff",
  fontWeight: "bold",
  borderBottom: "2px solid #ddd",
};

const tableRowStyle = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: "12px 0",
};

export default NumberPage;
