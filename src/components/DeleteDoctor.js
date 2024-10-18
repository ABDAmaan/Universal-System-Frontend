// DeleteDoctor.js
import React from "react";
import { deleteDoctor } from "../services/apiService"; // Import the deleteDoctor function

function DeleteDoctor({ doctorId, onDelete }) {
  const handleDelete = () => {
    // Call the deleteDoctor function from apiService to delete the doctor by ID
    deleteDoctor(doctorId)
      .then(() => {
        onDelete(); // Call the onDelete callback to refresh the doctor list after deleting
      })
      .catch((error) => console.error("Error deleting doctor:", error));
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteDoctor;
