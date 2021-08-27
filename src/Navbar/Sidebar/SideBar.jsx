import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md"
import { Link } from "react-router-dom";
import "./sideBar.css";

const SideBar = ({ toggle }) => {
  return (
    <div className="SideBar">
      <FaIcons.FaTimes className="closeIcon" onClick={toggle} />
      <div className="SideBarContainer">
        <ul className="SideBarMenu">
        <li>
            <Link onClick={toggle} to="/">
              <AiIcons.AiFillHome/> Accueil
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/about">
             <MdIcons.MdDescription/> A propos de moi
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/skills">
             <FaIcons.FaCode/> Compétences
            </Link>
          </li>
          <li>
            <Link onClick={toggle} to="/contact">
            <AiIcons.AiOutlineMail/>  Contactez-moi
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
