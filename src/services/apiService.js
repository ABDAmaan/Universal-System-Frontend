import axios from "axios";
import { logoutUser } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchDoctors = (authTokens) => {
  return axios.get(`${API_URL}/doctors/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    },
  });
};

export const addDoctor = (doctorData, authTokens) => {
  return axios.post(`${API_URL}/add/`, doctorData, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    },
  });
};

export const updateDoctor = (doctorId, doctorData, authTokens) => {
  return axios.put(`${API_URL}/edit/${doctorId}/`, doctorData, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    },
  });
};

export const deleteDoctor = (doctorId, authTokens) => {
  return axios.delete(`${API_URL}/delete/${doctorId}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokens.access),
    },
  });
};
