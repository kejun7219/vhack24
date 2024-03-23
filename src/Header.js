import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling
import logo from './picture/Logo.png'; // Import your logo image

const Header = () => {
  return (
    <header className="pink-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="logoname">Career Journey Hub</div>
      </div>
      <div className="words">
        <nav>
          <ul>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Community">Community</Link></li>
            <li><Link to="/Chat">Chat</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
