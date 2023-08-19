import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";

function Sidebar() {
  return (
<div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Messages</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
