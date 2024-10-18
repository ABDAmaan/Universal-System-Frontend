import React, { useState } from "react";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCalendarAlt,
  faUserCog,
  faCalendarCheck,
  faMoneyBill,
  faChartLine,
  faUsers,
  faBox,
  faCog,
  faChevronDown,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(""); // Track active main menu
  const [isAppointmentsOpen, setAppointmentsOpen] = useState(false); // Track dropdown status
  const [activeSubMenu, setActiveSubMenu] = useState(""); // Track active submenu

  // Handle main menu click
  const handleMenuClick = (menu) => {
    if (menu === "appointments") {
      setAppointmentsOpen(!isAppointmentsOpen); // Toggle Appointments dropdown
      setActiveSubMenu(""); // Reset active submenu
    } else {
      setAppointmentsOpen(false); // Close dropdown when a different main menu is clicked
      setActiveSubMenu(""); // Reset submenu
    }
    setActiveMenu(menu);
  };

  // Handle submenu click
  const handleSubMenuClick = (submenu) => {
    setActiveMenu(""); // Don't highlight the parent when a submenu is active
    setActiveSubMenu(submenu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/uniLOGO.png" alt="Universal Eye Clinic Logo" />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
          onClick={() => handleMenuClick("dashboard")}
        >
          <Link to="/" className="menu-link">
            <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
            Dashboard
          </Link>
        </li>

        {/* Appointments with Dropdown */}
        <li
          className={`menu-item ${isAppointmentsOpen ? "active" : ""}`}
          onClick={() => handleMenuClick("appointments")}
        >
          <Link to="/appointments" className="menu-link">
            <FontAwesomeIcon icon={faCalendarAlt} className="menu-icon" />
            Appointments
          </Link>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`dropdown-icon ${isAppointmentsOpen ? "rotate" : ""}`}
          />
        </li>

        {/* Dropdown for Appointments */}
        {isAppointmentsOpen && (
          <ul className="submenu">
            <Link to="/appointments/manage-doctors" className="submenu-link">
              <li
                className={`submenu-item ${
                  activeSubMenu === "manage-doctors" ? "active" : ""
                }`}
                onClick={() => handleSubMenuClick("manage-doctors")}
              >
                <FontAwesomeIcon icon={faUserMd} className="menu-icon" />
                Manage Doctors
              </li>
            </Link>
            {/* Additional submenu items can go here */}
          </ul>
        )}

        <li
          className={`menu-item ${
            activeMenu === "client-management" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("client-management")}
        >
          <Link to="/client-management" className="menu-link">
            <FontAwesomeIcon icon={faUserCog} className="menu-icon" />
            Client Management
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "schedule-management" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("schedule-management")}
        >
          <Link to="/schedule-management" className="menu-link">
            <FontAwesomeIcon icon={faCalendarCheck} className="menu-icon" />
            Schedule Management
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "payment-management" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("payment-management")}
        >
          <Link to="/payment-management" className="menu-link">
            <FontAwesomeIcon icon={faMoneyBill} className="menu-icon" />
            Payment Management
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "reports-analytics" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("reports-analytics")}
        >
          <Link to="/reports-analytics" className="menu-link">
            <FontAwesomeIcon icon={faChartLine} className="menu-icon" />
            Reports & Analytics
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "staff-management" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("staff-management")}
        >
          <Link to="/staff-management" className="menu-link">
            <FontAwesomeIcon icon={faUsers} className="menu-icon" />
            Staff Management
          </Link>
        </li>
        <li
          className={`menu-item ${
            activeMenu === "inventory-management" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("inventory-management")}
        >
          <Link to="/inventory-management" className="menu-link">
            <FontAwesomeIcon icon={faBox} className="menu-icon" />
            Inventory Management
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenu === "settings" ? "active" : ""}`}
          onClick={() => handleMenuClick("settings")}
        >
          <Link to="/settings" className="menu-link">
            <FontAwesomeIcon icon={faCog} className="menu-icon" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
