import './NavBarDropdown.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function NavBarDropdown() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <div className="navBarDropdown">
    <button className="navBarDropdownButton" onClick={toggleDropdown}>
      Settings
    </button>

    {isOpen && (
     <div className="navBarDropdownContent">

        {/* //Add a New Goals Post */}
        <Link to="/goals/new" onClick={handleLinkClick}>
          Add Goals Post
        </Link>
        
        &nbsp;&nbsp;

        {/* //Add a New Profile Post */}
        <Link to="/profiles/new" onClick={handleLinkClick}>
          Add New Profile
        </Link>

      </div>
    )}
    </div>
  );
};
