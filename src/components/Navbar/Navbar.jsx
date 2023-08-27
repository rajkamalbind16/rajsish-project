import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import TaskPopup from "./TaskPopup";

import "./Navbar.css";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openModal = () => {
    setPopupVisible(true);
  };

  const closeModal = () => {
    setPopupVisible(false);
  };

  const handleTaskSubmit = (newTask) => {
    closeModal();
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <button className="buttonplus" onClick={openModal}>
           + Create Task
          </button>
          <p id="searchBorderLine"></p>
          <div id="searchBorder">
            <input type="text" placeholder="Search your query" />
          </div>
          <div className="search-icon">
            <BsSearch />
          </div>
        </div>
        <div className="navbar-right">
          <span className="username">Ranjith Rajak | Senior Developer</span>
          <span className="navbar-logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cojX0CcK_Rgd9Psfq1ayilvqPJPsAlvObg&usqp=CAU"
              alt=""
            />
          </span>
          <select className="icon-menu">
            <option value=""></option>
          </select>
        </div>
      </div>

      {isPopupVisible && <TaskPopup onTaskSubmit={handleTaskSubmit} />}

    </div>
  );
};

export default Navbar;
