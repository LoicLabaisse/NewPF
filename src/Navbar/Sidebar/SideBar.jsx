import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = ({ toggle }) => {
  return (
    <div className="SideBar">
      <FaIcons.FaTimes className="closeIcon" onClick={toggle} />
      <div className="SideBarContainer">
        <ul className="SideBarMenu">
          <li>
            <Link onClick={toggle} to="/about">
              A propos de moi
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/skills">
              Compétences
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/contact">
              Contactez-moi
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
