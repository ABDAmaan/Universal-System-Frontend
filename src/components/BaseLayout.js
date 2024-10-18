import React from "react";
import Sidebar from "./Sidebar";
import TopNavBar from "./TopNavBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopNavBar />
        <div className="content-container">
          {children}{" "}
          {/* Render child components like dashboard, doctor list, etc. */}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
