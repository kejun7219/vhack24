import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="pink-header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/blog">Blog Post</a></li>
          <li><a href="/chat">Chat</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
