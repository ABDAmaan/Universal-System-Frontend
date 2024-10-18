import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoute";
import BaseLayout from "./components/BaseLayout";
import Login from "./components/Login";
import DoctorList from "./components/DoctorList"; // Example protected component
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          {/* Protected Routes: Wrapped with BaseLayout */}
          <Route element={<PrivateRoutes />}>
            <Route
              path="/"
              element={
                <BaseLayout>
                  {/* Add your dashboard or default component here */}
                  <h1>Welcome to the Dashboard</h1>
                </BaseLayout>
              }
              exact
            />
          </Route>
          <Route
            path="/appointments/manage-doctors"
            element={
              <BaseLayout>
                <DoctorList />
              </BaseLayout>
            }
          />
          <Route path="/appointments" element={<BaseLayout></BaseLayout>} />
          <Route
            path="/client-management"
            element={<BaseLayout></BaseLayout>}
          />
          <Route path="*" element={<Navigate to="/login" />} />)
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
