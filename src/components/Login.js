import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import "../styles/Login.css"; // Make sure to link your CSS file for styling

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src="/uniLOGO.png" alt="Universal Eye Clinic Logo" />
        </div>
        <h2 className="login-title">User Login</h2>
        <form onSubmit={loginUser} className="login-form">
          <div className="input-group">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
