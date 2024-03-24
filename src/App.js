import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Community  from './Community';
import BlogPost from './BlogPost';
import Chat from './Chat';
import Blog from './Blog';
import ComPost from './ComPost';
import './App.css';
import backgroundImage from './picture/background2.jpg';

function App() {
  return (
    <Router>
            <div style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        overflow: 'hidden', 
        backgroundAttachment: 'fixed' 
      }}>
        <Header />
        <Routes>
          <Route path="/Community" element={<Community />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ComPost" element={<ComPost />} />
          <Route path="/" element={<Navigate to="/Blog" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;