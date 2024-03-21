import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Community  from './Community';
import Chat from './Chat';

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
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;