// EditDoctor.js
import React, { useState } from "react";
import { updateDoctor } from "../services/apiService";

function EditDoctor({ doctor, onEdit }) {
  const [name, setName] = useState(doctor.name);

  const handleEdit = (e) => {
    e.preventDefault();

    updateDoctor(doctor.id, { name })
      .then((response) => {
        onEdit(response.data); // Pass the updated doctor back to the parent component
      })
      .catch((error) => console.error("Error editing doctor:", error));
  };

  return (
    <form onSubmit={handleEdit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Edit doctor name"
        required
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditDoctor;
