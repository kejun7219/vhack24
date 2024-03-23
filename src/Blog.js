import React from 'react';
import Post from './Post';
import './Blog.css';
import friend5Image from './picture/pro1.jpeg'; 
import picture from './picture/pro7.png';

const initialPosts = [
  {
    id: 1,
    user: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 10,
    comments: [
      { id: 1, user: 'Jane Smith', comment: 'Nice post!' },
      { id: 2, user: 'Alice', comment: 'Great!' }
    ]
  },
  {
    id: 2,
    user: 'Alice',
    content: 'Nulla facilisi. Ut fringilla velit vel nisi consequat.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 20,
    comments: []
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <div className="home-page">
      <div class="blog-frame">
        <div class="profile-container">
          <div class="profile">
            <img src={friend5Image} alt="Profile" class="profile-picture" />
          </div>
          <div class="profileName">
            <h2>John Doe</h2>
            <p>Computer Science Student</p>
          </div>
          <p class="date">3 days ago</p>
        </div>
        <h2>Title: My Career Journey: Across Borders and Boundaries</h2>
        <h3>Checkpoint 1: New York, USA (2010-2013)</h3>
        <p>My career took flight in the heart of New York City, where I dove headfirst into the realm of marketing as a fresh graduate. At a boutique agency in Manhattan, I cut my teeth on digital campaigns and consumer insights, laying the foundation for my professional trajectory.</p>
        <h3>Checkpoint 2: London, UK (2014-2016)</h3>
        <p>Eager for new challenges, I ventured across the Atlantic to London, immersing myself in the dynamic landscape of international marketing. In the buzzing streets of the British capital, I navigated multicultural campaigns and expanded my horizons.</p>
        <h3>Checkpoint 3: Sydney, Australia (2017-2019)</h3>
        <p>The allure of Sydney's coastal charm beckoned me next, where I embraced a leadership role at a startup poised for growth. Overseeing marketing initiatives in the vibrant Asia-Pacific market, I thrived in an environment fueled by innovation and collaboration.</p>
        <h3>Checkpoint 4: Remote Work (2020-Present)</h3>
        <p>Adapting to the shifting tides of the global landscape, I embraced remote work as a means to stay connected and agile. From my home base, I continue to drive impactful strategies and foster virtual connections across borders.</p>
        <p>Each checkpoint in my career journey has been a stepping stone towards professional growth and personal fulfillment. As I forge ahead into the future, I remain open to new adventures and opportunities, guided by the lessons learned and experiences gained along the way.</p>
        <img src={picture} alt="Profile" class="post-picture" />
      </div>
    </div>
  );
};

export default Blog;
