// src/components/DoctorList.js
import React, { useState, useEffect, useContext } from "react";
import {
  fetchDoctors,
  addDoctor,
  updateDoctor,
  deleteDoctor,
} from "../services/apiService";
import "../styles/DoctorList.css";
import AuthContext from "../context/AuthContext";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Tracks the doctor being edited
  const [newName, setNewName] = useState(""); // Holds the new name for the add doctor form

  const { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    fetchDoctors(authTokens)
      .then((response) => {
        if (response.status === 200) {
          setDoctors(response.data);
        } else {
          logoutUser();
        }
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        logoutUser();
      });
  }, [authTokens]);

  const handleAddDoctor = (e) => {
    e.preventDefault();
    if (!newName) return;
    addDoctor({ name: newName }, authTokens)
      .then(() => {
        setNewName("");
        refreshDoctors();
      })
      .catch((error) => console.error("Error adding doctor:", error));
  };

  const handleEditDoctor = (doctorId, updatedName) => {
    updateDoctor(doctorId, { name: updatedName }, authTokens)
      .then(() => {
        setIsEditing(null);
        refreshDoctors();
      })
      .catch((error) => console.error("Error updating doctor:", error));
  };

  const handleDeleteDoctor = (doctorId) => {
    deleteDoctor(doctorId, authTokens)
      .then(() => refreshDoctors())
      .catch((error) => console.error("Error deleting doctor:", error));
  };

  const refreshDoctors = () => {
    fetchDoctors(authTokens)
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Error refreshing doctors:", error));
  };

  return (
    <div className="doctor-list-container">
      <h2>Doctors</h2>
      <form onSubmit={handleAddDoctor} className="add-doctor-form">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter doctor name"
          required
        />
        <button type="submit" className="add-button">
          Add Doctor
        </button>
      </form>
      <ul className="doctor-list">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="doctor-item">
            {isEditing === doctor.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  defaultValue={doctor.name}
                  onChange={(e) => setNewName(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={() => handleEditDoctor(doctor.id, newName)}
                  className="save-button"
                >
                  Save
                </button>
              </div>
            ) : (
              <div
                className="doctor-name"
                onClick={() => setIsEditing(doctor.id)}
              >
                {doctor.name}
              </div>
            )}
            {isEditing === doctor.id && (
              <button
                onClick={() => handleDeleteDoctor(doctor.id)}
                className="delete-button"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
