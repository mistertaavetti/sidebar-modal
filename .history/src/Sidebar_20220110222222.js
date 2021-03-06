import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className="sidebar-header">
        <img src={logo} alt="taavetti" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
