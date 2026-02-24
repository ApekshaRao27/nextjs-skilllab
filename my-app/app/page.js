
"use client"
import { useState } from "react";
import Link from 'next/link'
import React from "react";

// Reusable Profile Card Component
function ProfileCard({ name, role, image, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "15px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <img
        src={image}
        alt={name}
        width="100"
        height="100"
        style={{
          borderRadius: "50%",
          marginBottom: "10px"
        }}
      />

      <h3>{name}</h3>
      <p style={{ color: "gray" }}>{role}</p>
    </div>
  );
}

// Main Page
export default function Page() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      
      <div style={{
        display: "flex",
    justifyContent: "center",   // center horizontally
    alignItems: "center",       // center vertically
    gap: "30px",
    minHeight: "100vh"
      }}>
        <ProfileCard
          name="Apeksha"
          role="Backend Developer"
          image="https://sp.yimg.com/ib/th/id/OIP.A5-MZjPQ6IrkrBWS58UW1QHaLY?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
          onClick={() => setSelectedUser("Apeksha is a skilled Backend Developer.")}
        />

        <ProfileCard
          name="Vidya"
          role="Backend Developer"
          image="https://sp.yimg.com/ib/th/id/OIP.sC-vLzs0WDrLjMMcDnSyjAHaLH?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
          onClick={() => setSelectedUser("Vipul works on server-side logic and APIs.")}
        />

        <ProfileCard
          name="Anjana"
          role="UI/UX Designer"
        image="https://sp.yimg.com/ib/th/id/OIP.98P6blECkZJEONOyF-NxJwHaKq?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"
          
          onClick={() => setSelectedUser("Anjana designs beautiful user interfaces.")}
        />
      </div>
      {/* Show details when clicked */}
      {selectedUser && (
        <div style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#e3f2fd",
          display: "inline-block",
          borderRadius: "10px"
        }}>
          <h2>{selectedUser}</h2>
        </div>
      )}
     
    </div>
  );
}