import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faUserCircle,
  faSignOutAlt, // For logout icon
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/AuthContext";
import "../styles/TopNavBar.css"; // Updated path

function TopNavBar({ onLogout }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="top-nav-bar">
      <div className="top-nav-left">{/* Left-aligned elements, if any */}</div>
      <div className="top-nav-right">
        <FontAwesomeIcon icon={faSearch} className="nav-icon" />
        <FontAwesomeIcon icon={faBell} className="nav-icon" />

        <div className="profile-section">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="profile-icon"
            onClick={toggleDropdown}
          />
          {user && <span className="profile-name">{user.username}</span>}

          {/* Dropdown for logout */}
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={logoutUser}>
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="dropdown-icon"
                />
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
