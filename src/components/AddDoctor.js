// AddDoctor.js
import React, { useState } from "react";
import { addDoctor } from "../services/apiService";
import Sidebar from "./Sidebar";

function AddDoctor({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoctor({ name })
      .then((response) => {
        onAdd(response.data); // Pass the new doctor back to the parent component
        setName(""); // Clear the input field
      })
      .catch((error) => console.error("Error adding doctor:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter doctor name"
        required
      />
      <button type="submit">Add Doctor</button>
    </form>
  );
}

export default AddDoctor;
