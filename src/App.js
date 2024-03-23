import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Community  from './Community';
import BlogPost from './BlogPost';
import Chat from './Chat';
import Blog from './Blog';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define your routes using Route components */}
          {/* Make sure to uncomment and import CommunityPage and BlogPage */}
          <Route path="/Community" element={<Community />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;